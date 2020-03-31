/* eslint-disable @typescript-eslint/unbound-method */
import React from "react";
import { Store } from "redux";
import { mount, ReactWrapper } from "enzyme";
import { Provider } from "react-redux";
import { createStoreWithState, createDefaultStore } from "../../redux/store";
import TodoList from "../TodoList/TodoList";
import Todo, { TodoType } from "../Todo/Todo";

const validTodoList: TodoType[] = [
  {
    id: 1,
    name: "",
    description: "",
    creationDate: "",
    isEditing: false,
  },
  {
    id: 2,
    name: "",
    description: "",
    creationDate: "",
    isEditing: false
  }
];

describe("<TodoList /> suite", () => {
  let wrapper: ReactWrapper;

  const setupTest = (store: Store): void => {
    wrapper = mount(<Provider store={store}> <TodoList/> </Provider>);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

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
    // expect(wrapper.find("input[name='todoToAdd']").exists()).toBeTruthy();
  });
});


// /* eslint-disable @typescript-eslint/unbound-method */
// import React from "react";
// import { Store } from "redux";
// import { mount, ReactWrapper } from "enzyme";
// import { Provider } from "react-redux";
// import { createDefaultStore } from "../../redux/store";
// // import { AppState } from "../../redux/app";
// // import { createDefaultStore, createStoreWithState } from "../../redux/store"; TODO: create this file!
// import { TodoPage } from "./Todo.pageObject";
// import TodoList from "../TodoList/TodoList";

// // const validState = (): AppState => {
// //   const appStateStore = createDefaultStore();
// //   return {
// //     ...appStateStore.getState(),
// //     todoList: [],
// //     todoToAdd: {
// //       id: 0,
// //       name: "",
// //       description: "",
// //       creationDate: Date.now().toString(),
// //       isEditing: false
// //     }
// //   };
// // };

// describe("<Todo /> suite", () => {
//   let wrapper: ReactWrapper;
//   let todoPage: TodoPage;

//   const setupTest = (store: Store): void => {
//     wrapper = mount(<Provider store={store}> <TodoList/> </Provider>);
//     todoPage = new TodoPage(wrapper);
//   };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it("when no account found then account creation page", () => {
//     const store = createDefaultStore();
//     setupTest(store);

//     expect(todoPage.startEditingTodo.exists()).toBeTruthy();
//   });
// });
