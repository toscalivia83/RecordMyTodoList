/* eslint-disable @typescript-eslint/unbound-method */
import React from "react";
import { Store } from "redux";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { createStoreWithState, createDefaultStore } from "../../redux/store";
import { TodoType } from "../../redux/types";
import Todo from "../Todo/Todo";
import App from "../../App";

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
    wrapper = mount(<Provider store={store}> <App/> </Provider>);
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


  it("adds, updates and deletes the todos to the todolist correctly", () => {
    const defaultStore = createDefaultStore();
    const store = createStoreWithState({
      ...defaultStore.getState(),
      todos: {
        ...defaultStore.getState().todos,
        todoList: []
      }
    });
    setupTest(store);

    expect(wrapper.find(Todo)).toHaveLength(0);
    wrapper.find("input[name='todoToAdd']").simulate("change", { target: { value: "test1" } });
    wrapper.find("button[name='addTodo']").simulate("click");
    expect(store.getState().todos.todoList.length).toEqual(1);
    expect(store.getState().todos.todoList[0].description).toEqual("test1");

    wrapper.find("input[name='todoToAdd']").simulate("change", { target: { value: "test2" } });
    wrapper.find("button[name='addTodo']").simulate("click");
    expect(store.getState().todos.todoList.length).toEqual(2);
    expect(store.getState().todos.todoList[1].description).toEqual("test2");

    wrapper.find("button[name='edit']").last().simulate("click");
    wrapper.find("input[name='todoToEdit']").simulate("change", { target: { value: "test2changed" } });
    expect(store.getState().todos.todoList.length).toEqual(2);
    expect(store.getState().todos.todoList[1].description).toEqual("test2changed");

    wrapper.find("button[name='delete']").last().simulate("click");
    expect(store.getState().todos.todoList.length).toEqual(1);
    expect(store.getState().todos.todoList[0].description).toEqual("test1");
  });
});
