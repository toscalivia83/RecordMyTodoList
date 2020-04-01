import React from "react";
import { connect } from "react-redux";
import { AppState, TodoType } from "../../redux/types";
import { Dispatch } from "redux";
import { todoToAddChangedActionCreator, todoAddedActionCreator } from "./action";

interface AddTodoProps {
  todoToAdd: TodoType;
}

interface AddTodoDispatchProps {
  todoToAddChanged: Function;
  addTodo: Function;
}

const AddTodo = ({ todoToAdd, todoToAddChanged, addTodo }: AddTodoProps & AddTodoDispatchProps): React.ReactElement =>
  <div>
    <input
      type="text"
      name="todoToAdd"
      value={todoToAdd.description}
      onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
        todoToAddChanged({
          id: todoToAdd.id,
          name: "test",
          description: event.target.value,
          creationDate: "now"
        })
      }/>
    <button
      name="addTodo"
      onClick={(): void => addTodo()}>+ Add</button>
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
