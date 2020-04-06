import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { createDefaultStore, createStoreWithState } from "../../redux/store";
import { Store } from "redux";
import { Provider } from "react-redux";
import { TodoType } from "../../redux/todoList/types";
import App from "../../App";
import EditTodo from "../EditTodo/EditTodo";

const validTodo = (todoId: number, name = "test", description = "description"): TodoType => ({
  id: todoId,
  name,
  description,
  creationDate: "",
});

describe("<Todo /> suite", () => {
  let wrapper: ReactWrapper;
  
  const setupTest = (store: Store): void => {
    wrapper = mount(<Provider store={store}> <App /> </Provider>);
  };
  
  it("should display and edit the todo correctly", () => {
    const defaultStore = createDefaultStore();
    const store = createStoreWithState({
      ...defaultStore.getState(),
      todos: {
        ...defaultStore.getState().todos,
        todoList: [validTodo(0)]
      }
    });
    setupTest(store);

    expect(wrapper.find(EditTodo).exists()).toBeFalsy();
    wrapper.find("button[name='edit']").simulate("click");
    expect(wrapper.find(EditTodo).exists()).toBeTruthy();

    wrapper.find("input[name='todoToEdit']").simulate("change", { target: { value: "hello" } });
    wrapper.find("button[name='save']").simulate("click");
    expect(wrapper.find(EditTodo).exists()).toBeFalsy();
    expect(store.getState().todos.todoList[0].description).toEqual("hello");
  });

  it("should delete the todo correctly", () => {
    const defaultStore = createDefaultStore();
    const store = createStoreWithState({
      ...defaultStore.getState(),
      todos: {
        ...defaultStore.getState().todos,
        todoList: [validTodo(0)]
      }
    });
    setupTest(store);

    wrapper.find("button[name='delete']").simulate("click");
    expect(store.getState().todos.todoList).toEqual([]);
  });
});