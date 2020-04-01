import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { todoDeletedActionCreator } from "../TodoList/action";
import EditTodo from "../EditTodo/EditTodo";
import { startEditingTodoActionCreator, stopEditingTodoActionCreator } from "../EditTodo/action";
import { AppState, TodoType } from "../../redux/types";

interface DispatchProps {
  startEditingTodo: Function;
  stopEditingTodo: Function;
  deleteTodo: Function;
}

interface StateProps {
  isDisplayingRecord: boolean;
}

const Todo = ({ id, name, description, creationDate, isDisplayingRecord, startEditingTodo, stopEditingTodo, deleteTodo }: TodoType & DispatchProps & StateProps): React.ReactElement => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <button
        type="button"
        name="edit"
        onClick={(): void => {
          setIsEditing(true);
          startEditingTodo(id);
        }}>EDIT</button>

      {
        isEditing && !isDisplayingRecord
          ? <>
            <EditTodo
              id={id}
              name={name}
              description={description}
              creationDate={creationDate}
              isEditing={isEditing} />
            <button
              type="button"
              name="save"
              onClick={(): void => {
                setIsEditing(false);
                stopEditingTodo(id);
              }}
            >Save</button>
          </>
          : <div>{description} (on the {creationDate})</div>
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

const mapStateToProps = (state: AppState): StateProps => ({
  isDisplayingRecord: state.record.isDisplaying
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  startEditingTodo: (id: number): void => {
    dispatch(startEditingTodoActionCreator(id)); 
  },
  stopEditingTodo: (id: number): void => {
    dispatch(stopEditingTodoActionCreator(id)); 
  },
  deleteTodo: (todo: TodoType): void => {
    dispatch(todoDeletedActionCreator(todo)); 
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
