import * as React from "react";
import * as ReactDOM from "react-dom";
import { devToolsEnhancer } from "redux-devtools-extension";
import { createStore, StoreEnhancer, Store, compose } from 'redux';
import { Provider } from 'react-redux';
import { todoListReducer } from "./components/TodoList/TodoListReducer";
import TodoList from "./components/TodoList/TodoList";
import { AppState } from "./redux/app";
import { TodoType } from "./components/Todo/Todo";

const middlewareList: StoreEnhancer[]= [devToolsEnhancer({})];
const composedMiddleware: StoreEnhancer = compose(...middlewareList);

const defaultTodoToAdd = (id: number): TodoType => ({
  id,
  name: '',
  description: '',
  creationDate: Date.now().toString()
});

const defaultState: AppState = {
  todoList: [],
  todoToAdd: defaultTodoToAdd(0)
};

export const createStoreWithState: (state: AppState) => Store<AppState> = (state: AppState): Store<AppState> => {
  return createStore(todoListReducer, state, composedMiddleware);
};

export const createDefaultStore: () => Store<AppState> = (): Store<AppState> => {
  return createStoreWithState(defaultState);
};

const App = () => (
  <Provider store={createDefaultStore()}>
    <TodoList />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
