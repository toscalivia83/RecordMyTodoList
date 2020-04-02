/* eslint-disable @typescript-eslint/unbound-method */
import React from "react";
import { Store } from "redux";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { createStoreWithState, createDefaultStore } from "../../redux/store";
import { TodoType } from "../../redux/types";
import TodoList from "../TodoList/TodoList";
import Todo from "../Todo/Todo";

const validTodo = (todoId: number, name = "test", description = "description"): TodoType => ({
  id: todoId,
  name,
  description,
  creationDate: "",
});

const validTodoList: TodoType[] = [validTodo(0), validTodo(1)];

describe("<TodoList /> suite", () => {
  let wrapper: ReactWrapper;

  const setupTest = (store: Store): void => {
    wrapper = mount(<Provider store={store}> <TodoList/> </Provider>);
  };

  it("displays the todo list correctly", () => {
    const defaultStore = createDefaultStore();
    const store = createStoreWithState({
      ...defaultStore.getState(),
      todos: {
        ...defaultStore.getState().todos,
        todoList: validTodoList
      }
    });
    setupTest(store);

    expect(wrapper.find(Todo)).toHaveLength(2);
  });
});
