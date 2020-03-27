import { TodoActionType, TodoAction } from "../../redux/actions";
import { TodoType } from "../DisplayTodo/DisplayTodo";

export function todoAddedActionCreator(): TodoAction {
  return {
    type: TodoActionType.TODO_ADDED
  };
}

export function todoToAddChangedActionCreator(todo: TodoType): TodoAction {
  return {
    type: TodoActionType.TODO_TO_ADD_CHANGED,
    payload: todo
  };
}