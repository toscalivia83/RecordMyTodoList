import { TodoType, TodoAction } from "../../redux/todoList/types";

export function todoAddedActionCreator(): TodoAction {
  return {
    type: "TODO_ADDED"
  };
}

export function todoToAddChangedActionCreator(todo: TodoType): TodoAction {
  return {
    type: "TODO_TO_ADD_CHANGED",
    payload: todo
  };
}

export function todoUpdatedActionCreator(todo: TodoType): TodoAction {
  return {
    type: "TODO_UPDATED",
    payload: todo
  };
}

export function startEditingTodoActionCreator(id: number): TodoAction {
  return {
    type: "START_TODO_EDITING",
    payload: id
  };
}

export function stopEditingTodoActionCreator(id: number): TodoAction {
  return {
    type: "STOP_TODO_EDITING",
    payload: id
  };
}

export function todoDeletedActionCreator(todo: TodoType): TodoAction {
  return {
    type: "TODO_DELETED",
    payload: todo
  };
}
