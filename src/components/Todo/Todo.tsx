import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { todoDeletedActionCreator, todoToAddChangedActionCreator } from "../TodoList/action";
import EditTodo from "./EditTodo/EditTodo";
import { startEditingTodoActionCreator } from "./EditTodo/action";

const Todo = ({ id, name, description, creationDate, isEditing, deleteTodo, startEditingTodo }: TodoType & DispatchProps) => {
  return (
  <div>
    <button
      type="button"
      name="edit"
      onClick={() => startEditingTodo(id)}>EDIT</button>

    {
      isEditing
      ? <EditTodo
          id={id}
          name={name}
          description={description}
          creationDate={creationDate}
          isEditing={isEditing} />
      : <div>{id} - {name} - {description} - {creationDate}</div>
    }

    {/* <div>
        <button
          type="button"
          name="delete"
          onClick={() => deleteTodo({id, name, description, creationDate})}>X</button>
    </div> */}
  </div>
)};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  deleteTodo: (todo: TodoType): void => { dispatch(todoDeletedActionCreator(todo)) },
  startEditingTodo: (id:number): void => { dispatch(startEditingTodoActionCreator(id)) },
  todoToAddChanged: (todo: TodoType): void => {dispatch(todoToAddChangedActionCreator(todo))}
});

export default connect(null, mapDispatchToProps)(Todo);

interface DispatchProps {
  deleteTodo: Function;
  startEditingTodo: Function;
  todoToAddChanged: Function;
}

export interface TodoType {
  id: number;
  name: string;
  description: string;
  creationDate: string; // TODO: change to Date
  isEditing: boolean;
}