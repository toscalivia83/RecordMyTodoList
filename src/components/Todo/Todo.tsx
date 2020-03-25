import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { todoDeletedActionCreator } from "../TodoList/action";

const Todo = ({ id, name, description, creationDate, deleteTodo }: TodoType & DispatchProps) => {
  return (
  <div>
    <div>{id} - {name} - {description} - {creationDate}</div>

    <button
      type="button"
      name="delete"
      onClick={() => deleteTodo({ id, name, description, creationDate })}
      >X</button>
  </div>
)};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  deleteTodo: (todo: TodoType): void => { dispatch(todoDeletedActionCreator(todo)) }
});

export default connect(null, mapDispatchToProps)(Todo);

interface DispatchProps {
  deleteTodo: Function;
}

export interface TodoType {
  id: number;
  name: string;
  description: string;
  creationDate: string; // TODO: change to Date
}