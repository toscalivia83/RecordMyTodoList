import * as React from "react";
import { connect } from "react-redux";
import DisplayTodo, { TodoType } from "../DisplayTodo/DisplayTodo";
import { AppState } from "../../redux/app";
import { Dispatch } from "redux";
import { setRecordedTodoListDisplayedActionCreator } from "./action";

const setRecordedTodoListTimeout = (setRecordedTodoListDisplayed: Function, todoList: TodoType[][], displayedRecordId?: number): void => {
  setTimeout(function() {
    if (displayedRecordId && displayedRecordId - 1 < todoList.length) {
      console.log(todoList[displayedRecordId - 1]);
      setRecordedTodoListDisplayed(todoList[displayedRecordId-1]);
      displayedRecordId = displayedRecordId + 1;
      setRecordedTodoListTimeout(setRecordedTodoListDisplayed, todoList, displayedRecordId);
    }
  }, 1000);
};

const getTodoListDisplayed = (recordedTodoListDisplayed: TodoType[]): TodoType[] => recordedTodoListDisplayed;

const renderRecordedTodoList = (
  setRecordedTodoListDisplayed: Function,
  todoListRecorded: TodoType[][],
  recordedTodoListDisplayed: TodoType[],
  displayedRecordId?: number,
): React.ReactElement[] => {
  setRecordedTodoListTimeout(setRecordedTodoListDisplayed, todoListRecorded, displayedRecordId);
  return (
    getTodoListDisplayed(recordedTodoListDisplayed).map((todo: TodoType) =>
      <DisplayTodo key={todo.id} {...todo} />
    )
  );
};

const shouldDisplayRecorded = (displayedRecordId: number | undefined, todoListRecorded: TodoType[][]): boolean =>
  Boolean(displayedRecordId) && Boolean(todoListRecorded.length);

const TodoList = ({ todoList, todoListRecorded, displayedRecordId, setRecordedTodoListDisplayed, recordedTodoListDisplayed }: Props & DispatchProps): React.ReactElement => 
  <div>
    {todoList.map((todo) =>
      <DisplayTodo key={todo.id} {...todo}/>
    )}
    {
      shouldDisplayRecorded(displayedRecordId, todoListRecorded)
      && renderRecordedTodoList(
        setRecordedTodoListDisplayed,
        todoListRecorded,
        recordedTodoListDisplayed,
        displayedRecordId
      )
    }
  </div>
;

const mapStateToProps = (state: AppState): Props => ({
  todoList: state.todos.todoList,

  todoListRecorded: state.record.todoListSuite,
  displayedRecordId: state.record.displayedRecordId,
  recordedTodoListDisplayed: state.record.todoListDisplayed
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setRecordedTodoListDisplayed: (todoList: TodoType[]): void => {
    dispatch(setRecordedTodoListDisplayedActionCreator(todoList));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

interface Props {
  todoList: TodoType[];
  todoListRecorded: TodoType[][];
  displayedRecordId?: number;
  recordedTodoListDisplayed: TodoType[];
}

interface DispatchProps {
  setRecordedTodoListDisplayed: Function;
}