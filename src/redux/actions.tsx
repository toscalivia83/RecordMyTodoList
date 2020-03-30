import { TodoType } from "../components/DisplayTodo/DisplayTodo";

export enum TodoActionType {
  TODO_ADDED = "TODO_ADDED",
  START_TODO_EDITING = "START_TODO_EDITING",
  STOP_TODO_EDITING = "STOP_TODO_EDITING",
  TODO_UPDATED = "TODO_UPDATED",
  TODO_DELETED = "TODO_DELETED",
  TODO_TO_ADD_CHANGED = "TODO_TO_ADD_CHANGED",
  SET_RECORDED_TODO_LIST_DISPLAYED = "SET_RECORDED_TODO_LIST_DISPLAYED"
}

export enum RecordActionType {
  START_RECORDING = "START_RECORDING",
  STOP_RECORDING = "STOP_RECORDING",
  PLAY_RECORDING = "PLAY_RECORDING",
  END_PLAY_RECORDING = "END_PLAY_RECORDING",
  CLEAR_RECORDING = "CLEAR_RECORDING",
}

export interface RecordAction {
  type: RecordActionType;
}

export interface TodoAction {
  type: TodoActionType;
  payload?: TodoType | number | TodoType[];
}
