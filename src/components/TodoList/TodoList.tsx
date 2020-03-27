import * as React from "react";
import { connect } from "react-redux";
import DisplayTodo, { TodoType } from "../DisplayTodo/DisplayTodo";
import { AppState } from "../../redux/app";

const TodoList = ({ todoList }: Props): React.ReactElement => 
  <div>
    {todoList.map((todo) =>
      <DisplayTodo key={todo.id} {...todo}/>
    )}
  </div>
;

const mapStateToProps = (state: AppState): Props => ({
  todoList: state.todoList
});

export default connect(mapStateToProps)(TodoList);

interface Props {
  todoList: TodoType[];
}