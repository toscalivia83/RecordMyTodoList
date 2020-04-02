import { TodoActionType, TodoAction } from "../../redux/actions";
import { TodoType } from "../../redux/types";

export function todoUpdatedActionCreator(todo: TodoType): TodoAction {
  return {
    type: TodoActionType.TODO_UPDATED,
    payload: todo
  };
}