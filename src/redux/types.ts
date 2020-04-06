import { TodoState, TodoAction } from "./todoList/types";
import { RecordState, RecordAction } from "./record/types";

export interface AppState {
  todos: TodoState;
  record: RecordState;
}

export type AppAction = TodoAction | RecordAction;

export type StateProvider<T extends {}> = () => T;
export type AppStateProvider = StateProvider<AppState>;