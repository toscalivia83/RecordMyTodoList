import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { todoDeletedActionCreator } from "../TodoList/action";
import EditTodo from "../EditTodo/EditTodo";
import { startEditingTodoActionCreator } from "../EditTodo/action";
import { AppState } from "../../redux/app";

const Todo = ({ id, name, description, creationDate, isEditing, isDisplayingRecord, startEditingTodo, deleteTodo }: TodoType & DispatchProps & StateProps): React.ReactElement => {
  return (
    <div>
      <button
        type="button"
        name="edit"
        onClick={(): void => {
          startEditingTodo(id); 
        }}>EDIT</button>

      {
        isEditing && !isDisplayingRecord
          ? <EditTodo
            id={id}
            name={name}
            description={description}
            creationDate={creationDate}
            isEditing={isEditing} />
          : <div>{id} - {name} - {description} - {creationDate}</div>
      }

      <div>
        <button
          type="button"
          name="delete"
          onClick={(): void => {
            deleteTodo({ id, name, description, creationDate });
          }}>X</button>
      </div>
    </div>
  )
  ;
};

interface StateProps {
  isDisplayingRecord: boolean;
}

const mapStateToProps = (state: AppState): StateProps => ({
  isDisplayingRecord: state.record.isDisplaying
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  startEditingTodo: (id: number): void => {
    dispatch(startEditingTodoActionCreator(id)); 
  },
  deleteTodo: (todo: TodoType): void => {
    dispatch(todoDeletedActionCreator(todo)); 
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

interface DispatchProps {
  startEditingTodo: Function;
  deleteTodo: Function;
}

export interface TodoType {
  id: number;
  name: string;
  description: string;
  creationDate: string; // TODO: change to Date
  isEditing: boolean;
}