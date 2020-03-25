import { TodoActionType } from "../../redux/actions";
import { AppState } from "../../redux/app";
import { TodoType } from "../Todo/Todo";

const defaultTodoToAdd = (id: number): TodoType => ({
  id,
  name: '',
  description: '',
  creationDate: Date.now().toString()
});

const defaultTodoList: AppState = {
  todoList: [],
  todoToAdd: defaultTodoToAdd(0)
};

export const todoListReducer = (state = defaultTodoList, action: any) => {
  switch (action.type) {
    case TodoActionType.TODO_ADDED:
      return {
        ...state,
        todoList: state.todoList.concat(state.todoToAdd),
        todoToAdd: defaultTodoToAdd(state.todoToAdd.id + 1)
      };
    case TodoActionType.TODO_DELETED:
      return {
        ...state,
        todoList: [...state.todoList].filter(todo => todo.id !== action.payload.id)
      };
    case TodoActionType.TODO_UPDATED:
      return {
        ...state,
        todoList: state.todoList.splice(action.payload.id - 1, 1, action.payload)
      };
    case TodoActionType.TODO_TO_ADD_CHANGED:
      return {
        ...state,
        todoToAdd: {
          ...state.todoToAdd,
          description: action.payload.description,
          name: action.payload.name
        }
      }
    default:
      return state;
  }
};