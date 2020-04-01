import React from "react";
import { ReactWrapper, mount } from "enzyme";
import { createDefaultStore, createStoreWithState } from "../../redux/store";
import { Store } from "redux";
import { Provider } from "react-redux";
import { TodoType } from "../../redux/types";
import App from "../../App";

const validAddTodo: TodoType = {
  id: 0,
  name: "",
  description: "",
  creationDate: "",
  isEditing: false,
};

describe("<AddTodo /> suite", () => {
  let wrapper: ReactWrapper;
  
  const setupTest = (store: Store): void => {
    wrapper = mount(<Provider store={store}> <App /> </Provider>);
  };
  
  it("should display the input to add a todo correctly", () => {
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
  });
});