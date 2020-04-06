import * as React from "react";
import { connect } from "react-redux";
import Todo from "../Todo/Todo";
import { AppState } from "../../redux/types";
import { TodoType } from "../../redux/todoList/types";
import styles from "./TodoList.module.css";

const TodoList = ({ todoList }: Props): React.ReactElement => 
  <div className={styles.container}>
    {todoList.map((todo) =>
      <Todo key={todo.id} {...todo}/>
    )}
  </div>
;

const mapStateToProps = (state: AppState): Props => ({
  todoList: state.todos.todoList
});

export default connect(mapStateToProps)(TodoList);

interface Props {
  todoList: TodoType[];
}