import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TodoType } from "../../redux/types";
import { todoUpdatedActionCreator } from "./action";

interface DispatchProps {
  todoUpdated: Function;
}

interface StateProps {
  isEditing: boolean;
}

const EditTodo = ({ id, name, description, creationDate, isEditing, todoUpdated }: StateProps & TodoType & DispatchProps): React.ReactElement => {
  return (
    <div>
      <input
        type="text"
        name="todoToAdd"
        value={description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
          todoUpdated({ id, name, description: event.target.value, creationDate, isEditing })
        }/>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  todoUpdated: (todo: TodoType): void => {
    dispatch(todoUpdatedActionCreator(todo)); 
  }
});

export default connect(null, mapDispatchToProps)(EditTodo);
