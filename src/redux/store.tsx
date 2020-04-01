import { devToolsEnhancer } from "redux-devtools-extension";
import { StoreEnhancer, compose } from "redux";
import { createStore, Store } from "redux";
import { AppState, TodoType } from "../redux/types";
import { rootReducer } from "./reducers";

const defaultTodoToAdd = (id: number): TodoType => ({
  id,
  name: "",
  description: "",
  creationDate: Date.now().toString(),
  isEditing: false
});

const defaultState: AppState = {
  todos: {
    todoList: [],
    todoToAdd: defaultTodoToAdd(0),
    todoListSuite: []
  },
  record: {
    todoListSuite: [],
    isDisplaying: false,
    isRecording: false
  }
};

// const saveToLocalStorage = (state: AppState) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("state", serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// };

// const loadFromLocalStorage = () => {
//   try {
//     const serializedState = localStorage.getItem("state");
//     if (!serializedState) return undefined;
//     return JSON.parse(serializedState);
//   } catch (e) {
//     console.log(e);
//     return e;
//   }
// };

const middlewareList: StoreEnhancer[]= [
  devToolsEnhancer({})
];
const composedMiddleware: StoreEnhancer = compose(
  ...middlewareList,
);

export const createStoreWithState: (state: AppState) => Store<AppState> = (state: AppState): Store<AppState> => {
  return createStore(
    rootReducer,
    // loadFromLocalStorage(),
    state,
    composedMiddleware);
};

export const createDefaultStore: () => Store<AppState> = (): Store<AppState> => {
  const store = createStoreWithState(defaultState);
  // store.subscribe(() => saveToLocalStorage(store.getState()));
  return store;
};