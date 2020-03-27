import { TodoType } from "../components/DisplayTodo/DisplayTodo";

export interface AppState {
  todoList: TodoType[];
  todoToAdd: TodoType;
}
