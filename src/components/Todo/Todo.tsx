import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { todoDeletedActionCreator, startEditingTodoActionCreator, stopEditingTodoActionCreator } from "../TodoList/action";
import EditTodo from "../EditTodo/EditTodo";
import { AppState, TodoType } from "../../redux/types";
import styles from "./Todo.module.css";
import classnames from "classnames";

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
    <div className={styles.container}>
      {!isDisplayingRecord && <button
        type="button"
        name="edit"
        onClick={(): void => {
          setIsEditing(true);
          startEditingTodo(id);
        }}
        className={classnames(styles.button, styles.editButton)}
      >EDIT</button>}

      {
        isEditing && !isDisplayingRecord
          ? <>
            <EditTodo
              id={id}
              name={name}
              description={description}
              creationDate={creationDate} />
            <button
              type="button"
              name="save"
              onClick={(): void => {
                setIsEditing(false);
                stopEditingTodo(id);
              }}
              className={classnames(styles.button, styles.saveButton)}
            >Save</button>
          </>
          :
          <div>
            <div className={styles.description}>{description || "No todo..."}</div>
            <div className={styles.displayDate}>({creationDate})</div>
          </div>
      }

      {!isDisplayingRecord && <div>
        <button
          type="button"
          name="delete"
          onClick={(): void => {
            deleteTodo({ id, name, description, creationDate });
          }}
          className={classnames(styles.button, styles.deleteButton)}>X</button>
      </div>}
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
