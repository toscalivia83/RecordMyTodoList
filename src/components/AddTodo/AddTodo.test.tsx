import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { createDefaultStore, createStoreWithState } from "../../redux/store";
import { Store } from "redux";
import { Provider } from "react-redux";
import { TodoType } from "../../redux/todoList/types";
import App from "../../App";

const validAddTodo: TodoType = {
  id: 0,
  name: "",
  description: "",
  creationDate: "",
};

describe("<AddTodo /> suite", () => {
  let wrapper: ReactWrapper;
  
  const setupTest = (store: Store): void => {
    wrapper = mount(<Provider store={store}> <App /> </Provider>);
  };
  
  it("should display the input to add a todo correctly and add it to the todo list", () => {
    const defaultStore = createDefaultStore();
    const store = createStoreWithState({
      ...defaultStore.getState(),
      todos: {
        ...defaultStore.getState().todos,
        todoToAdd: validAddTodo
      }
    });
    setupTest(store);

    expect(wrapper.find("input[name='todoToAdd']").exists()).toBeTruthy();
    wrapper.find("button[name='addTodo']").simulate("click");
    expect(store.getState().todos.todoList).toEqual([validAddTodo]);
  });
});