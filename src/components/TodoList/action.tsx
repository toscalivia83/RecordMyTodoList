import { TodoActionType, TodoAction } from "../../redux/actions";
import { TodoType } from "../DisplayTodo/DisplayTodo";

export function todoStartEditingActionCreator(id: number): TodoAction {
  return {
    type: TodoActionType.START_TODO_EDITING,
    payload: id
  };
}

export function todoStopEditingActionCreator(id: number): TodoAction {
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

export function todoDeletedActionCreator(todo: TodoType): TodoAction {
  return {
    type: TodoActionType.TODO_DELETED,
    payload: todo
  };
}

export function setRecordedTodoListDisplayedActionCreator(todoList: TodoType[]): TodoAction {
  return {
    type: TodoActionType.SET_RECORDED_TODO_LIST_DISPLAYED,
    payload: todoList
  };
}
