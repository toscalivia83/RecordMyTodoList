import { TodoType } from "../components/Todo/Todo";

export interface AppState {
  todos: TodoState;
  record: RecordState;
}

export interface TodoState {
  todoList: TodoType[];
  todoToAdd: TodoType;
}

export interface RecordState {
  todoListSuite: TodoType[][];
  todoListDisplayed: TodoType[];
  isRecording: boolean;
  displayedRecordId: number | undefined;
}
