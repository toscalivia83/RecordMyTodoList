import { combineReducers } from "redux";
import { todoListReducer } from "../redux/todoList/reducer";
import { recordReducer } from "../redux/record/reducer";
import { AppState } from "./types";

export const rootReducer = combineReducers<AppState>({
  todos: todoListReducer,
  record: recordReducer
});