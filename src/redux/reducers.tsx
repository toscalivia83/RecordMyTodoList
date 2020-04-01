import { combineReducers } from "redux";
import { todoListReducer } from "../components/TodoList/TodoListReducer";
import { recordReducer } from "../components/Record/RecordReducer";
import { AppState } from "./types";

export const rootReducer = combineReducers<AppState>({
  todos: todoListReducer,
  record: recordReducer
});