import * as React from "react";
import { connect } from "react-redux";
import Todo from "../Todo/Todo";
import { AppState, TodoType } from "../../redux/types";

const TodoList = ({
  todoList
}: Props): React.ReactElement => 
  <div>
    {todoList.map((todo) =>
      <Todo key={todo.id} {...todo}/>
    )}
  </div>
;

const mapStateToProps = (state: AppState): Props => ({
  todoList: state.todos.todoList,

  todoListRecorded: state.record.todoListSuite
});

export default connect(mapStateToProps)(TodoList);

interface Props {
  todoList: TodoType[];
  todoListRecorded: TodoType[][];
}