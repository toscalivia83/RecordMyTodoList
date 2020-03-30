import { combineReducers } from "redux";
import { todoListReducer } from "../components/TodoList/TodoListReducer";
import { recordReducer } from "../components/Record/RecordReducer";
import { AppState } from "./app";

export const rootReducer = combineReducers<AppState>({
  todos: todoListReducer,
  record: recordReducer
});