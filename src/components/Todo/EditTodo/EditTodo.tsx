import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TodoType } from "../Todo";
import { startEditingTodoActionCreator, stopEditingTodoActionCreator } from "./action";
import { todoUpdatedActionCreator } from "../../TodoList/action";

const EditTodo = ({ id, name, description, creationDate, isEditing, stopEditingTodo, todoUpdated }: TodoType & DispatchProps) => {
  return (
    <div>
      <input
          type="text"
          name="todoToAdd"
          value={description}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            todoUpdated({ id, name, description: event.target.value, creationDate, isEditing })
          }/>
      
      <button
        type="button"
        name="SAVE"
        onClick={() => stopEditingTodo(id)}
        >SAVE</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  startEditingTodo: (id: number): void => { dispatch(startEditingTodoActionCreator(id)) },
  stopEditingTodo: (id: number): void => { dispatch(stopEditingTodoActionCreator(id)) },
  todoUpdated: (todo: TodoType): void => { dispatch(todoUpdatedActionCreator(todo)) },
});

export default connect(null, mapDispatchToProps)(EditTodo);

interface DispatchProps {
  startEditingTodo: Function;
  stopEditingTodo: Function;
  todoUpdated: Function;
}