import { TodoType } from "../components/Todo/Todo";

export interface AppState {
  todoList: TodoType[];
  todoToAdd: TodoType;
}
