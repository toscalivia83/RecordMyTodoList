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
  isRecording: boolean;
}

export interface TodoType {
  id: number;
  name: string;
  description: string;
  creationDate: string;
}

export type StateProvider<T extends {}> = () => T;
export type AppStateProvider = StateProvider<AppState>;
