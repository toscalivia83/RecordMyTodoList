import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TodoType } from "../../redux/types";
import { stopEditingTodoActionCreator } from "./action";
import { todoUpdatedActionCreator } from "../TodoList/action";

interface DispatchProps {
  stopEditingTodo: Function;
  todoUpdated: Function;
}

const EditTodo = ({ id, name, description, creationDate, isEditing, stopEditingTodo, todoUpdated }: TodoType & DispatchProps): React.ReactElement => {
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
        name="save"
        onClick={(): void => {
          stopEditingTodo(id); 
        }}
      >Save</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  stopEditingTodo: (id: number): void => {
    dispatch(stopEditingTodoActionCreator(id)); 
  },
  todoUpdated: (todo: TodoType): void => {
    dispatch(todoUpdatedActionCreator(todo)); 
  },
});

export default connect(null, mapDispatchToProps)(EditTodo);
