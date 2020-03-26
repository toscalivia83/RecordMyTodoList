import { TodoActionType, TodoAction } from "../../../redux/actions";
import { TodoType } from "../Todo";

export function startEditingTodoActionCreator(id: number): TodoAction {
  return {
    type: TodoActionType.START_TODO_EDITING,
    payload: id
  };
}

export function stopEditingTodoActionCreator(id: number): TodoAction {
  return {
    type: TodoActionType.STOP_TODO_EDITING,
    payload: id
  };
}

export function todoUpdatedActionCreator(todo: TodoType): TodoAction {
  return {
    type: TodoActionType.TODO_UPDATED,
    payload: todo
  };
}