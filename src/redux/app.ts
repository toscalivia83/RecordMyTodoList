import { TodoType } from "../components/Todo/Todo";

export interface AppState {
  todos: TodoState;
  record: RecordState;
}

export interface TodoState {
  todoList: TodoType[];
  todoToAdd: TodoType;
  todoListSuite: TodoType[][];
}

export interface RecordState {
  todoListSuite: TodoType[][];
  isDisplaying: boolean;
  todoListDisplayed: TodoType[];
  isRecording: boolean;
}

export type StateProvider<T extends {}> = () => T;
export type AppStateProvider = StateProvider<AppState>;
