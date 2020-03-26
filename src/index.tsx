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
  creationDate: Date.now().toString(),
  isEditing: false
});

const defaultState: AppState = {
  todoList: [],
  todoToAdd: defaultTodoToAdd(0)
};

function saveToLocalStorage(state: AppState) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return e;
  }
}

export const createStoreWithState: (state: AppState) => Store<AppState> = (): Store<AppState> => {
  return createStore(todoListReducer, loadFromLocalStorage(), composedMiddleware);
};

export const createDefaultStore: () => Store<AppState> = (): Store<AppState> => {
  const store = createStoreWithState(defaultState);
  store.subscribe(() => saveToLocalStorage(store.getState()));
  return store;
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
