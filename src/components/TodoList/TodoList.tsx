import * as React from "react";
import { connect } from "react-redux";
import Todo, { TodoType } from "../Todo/Todo";
import { AppState } from "../../redux/app";
import { Dispatch } from "redux";
import { setRecordedTodoListDisplayedActionCreator } from "./action";

const TodoList = ({
  todoList
}: Props & DispatchProps): React.ReactElement => 
  <div>
    {todoList.map((todo) =>
      <Todo key={todo.id} {...todo}/>
    )}
  </div>
;

const mapStateToProps = (state: AppState): Props => ({
  todoList: state.todos.todoList,

  todoListRecorded: state.record.todoListSuite,
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
  recordedTodoListDisplayed: TodoType[];
}

interface DispatchProps {
  setRecordedTodoListDisplayed: Function;
}