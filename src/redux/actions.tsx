import { TodoType } from "../components/Todo/Todo";

export enum TodoActionType {
  TODO_ADDED = "TODO_ADDED",
  TODO_UPDATED = "TODO_UPDATED",
  TODO_DELETED = "TODO_DELETED",
  TODO_TO_ADD_CHANGED = "TODO_TO_ADD_CHANGED"
}

export interface TodoAction {
  type: TodoActionType;
  payload?: TodoType;
}