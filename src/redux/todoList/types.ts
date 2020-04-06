export interface TodoType {
  id: number;
  name: string;
  description: string;
  creationDate: string;
}

export interface TodoState {
  todoList: TodoType[];
  todoToAdd: TodoType;
  todoListSuite: TodoType[][];
}

interface TODO_ADDED {
  type: "TODO_ADDED";
}
interface TODO_DELETED {
  type: "TODO_DELETED";
  payload: TodoType;
}
interface START_TODO_EDITING {
  type: "START_TODO_EDITING";
  payload: number;
}
interface STOP_TODO_EDITING {
  type: "STOP_TODO_EDITING";
  payload: number;
}
interface TODO_UPDATED {
  type: "TODO_UPDATED";
  payload: TodoType;
}
interface TODO_TO_ADD_CHANGED {
  type: "TODO_TO_ADD_CHANGED";
  payload: TodoType;
}

export type TodoAction =
  | TODO_ADDED
  | TODO_DELETED
  | START_TODO_EDITING
  | STOP_TODO_EDITING
  | TODO_UPDATED
  | TODO_TO_ADD_CHANGED;