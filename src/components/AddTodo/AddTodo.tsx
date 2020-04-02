import React from "react";
import { connect } from "react-redux";
import { AppState, TodoType } from "../../redux/types";
import { Dispatch } from "redux";
import { todoToAddChangedActionCreator, todoAddedActionCreator } from "./action";
import classnames from "classnames";
import styles from "./AddTodo.module.css";

interface AddTodoProps {
  todoToAdd: TodoType;
}

interface AddTodoDispatchProps {
  todoToAddChanged: Function;
  addTodo: Function;
}

const AddTodo = ({ todoToAdd, todoToAddChanged, addTodo }: AddTodoProps & AddTodoDispatchProps): React.ReactElement =>
  <div className={styles.container}>
    <input
      type="text"
      name="todoToAdd"
      value={todoToAdd.description}
      onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
        todoToAddChanged({
          ...todoToAdd,
          description: event.target.value,
        })
      }
      className={styles.input}
    />
    <button
      name="addTodo"
      onClick={(): void => addTodo()}
      className={classnames(styles.button,styles.addTodoButton)}
    >+ Add</button>
  </div>;

const mapStateToProps = (state: AppState): AddTodoProps => ({
  todoToAdd: state.todos.todoToAdd
});

const mapDispatchToProps = (dispatch: Dispatch): AddTodoDispatchProps => ({
  todoToAddChanged: (todo: TodoType): void => {
    dispatch(todoToAddChangedActionCreator(todo));
  },
  addTodo: (): void => {
    dispatch(todoAddedActionCreator());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
