import * as React from "react";
import { connect } from "react-redux";
import Todo, { TodoType } from "../Todo/Todo";
import { AppState } from "../../redux/app";
import { Dispatch } from "redux";
import { setRecordedTodoListDisplayedActionCreator } from "./action";
import { setDisplayedRecordIdActionCreator } from "../Record/action";


// START RECORD RELATED - TODO: extract somewhere else
const setRecordedTodoListTimeout = (setRecordedTodoListDisplayed: Function, setDisplayedRecordId: Function, todoList: TodoType[][], displayedRecordId?: number): void => {
  setTimeout(function() {
    if (displayedRecordId && displayedRecordId <= todoList.length) {
      console.log(todoList[displayedRecordId - 1]);
      setRecordedTodoListDisplayed(todoList[displayedRecordId-1]);
      displayedRecordId = displayedRecordId + 1;
      setDisplayedRecordId(displayedRecordId);
      setRecordedTodoListTimeout(setRecordedTodoListDisplayed, setDisplayedRecordId, todoList, displayedRecordId);
    }
  }, 1000);
};

const getTodoListDisplayed = (recordedTodoListDisplayed: TodoType[]): TodoType[] => recordedTodoListDisplayed;

const renderRecordedTodoList = (
  setRecordedTodoListDisplayed: Function,
  setDisplayedRecordId: Function,
  todoListRecorded: TodoType[][],
  recordedTodoListDisplayed: TodoType[],
  displayedRecordId?: number,
): React.ReactElement[] => {
  setRecordedTodoListTimeout(setRecordedTodoListDisplayed, setDisplayedRecordId, todoListRecorded, displayedRecordId);
  return (
    getTodoListDisplayed(recordedTodoListDisplayed).map((todo: TodoType) =>
      <Todo key={todo.id} {...todo} />
    )
  );
};

const shouldDisplayRecorded = (displayedRecordId: number | undefined, todoListRecorded: TodoType[][]): boolean =>
  Boolean(displayedRecordId) && Boolean(todoListRecorded.length);
// END RECORD RELATED

const TodoList = ({ todoList, todoListRecorded, displayedRecordId, setRecordedTodoListDisplayed, setDisplayedRecordId, recordedTodoListDisplayed }: Props & DispatchProps): React.ReactElement => 
  <div>
    {todoList.map((todo) =>
      <Todo key={todo.id} {...todo}/>
    )}
    {
      shouldDisplayRecorded(displayedRecordId, todoListRecorded)
      && renderRecordedTodoList(
        setRecordedTodoListDisplayed,
        setDisplayedRecordId,
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
  },
  setDisplayedRecordId: (displayedRecordId: number): void => {
    dispatch(setDisplayedRecordIdActionCreator(displayedRecordId));
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
  setDisplayedRecordId: Function;
}