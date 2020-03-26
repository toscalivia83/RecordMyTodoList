import { TodoActionType } from "../../redux/actions";
import { AppState } from "../../redux/app";
import { TodoType } from "../Todo/Todo";

const defaultTodoToAdd = (id: number): TodoType => ({
  id,
  name: '',
  description: '',
  creationDate: Date.now().toString(),
  isEditing: false
});

const defaultTodoList: AppState = {
  todoList: [],
  todoToAdd: defaultTodoToAdd(0)
};

export const todoListReducer = (state = defaultTodoList, action: any) => {
  const tempTodoList = [...state.todoList];
  switch (action.type) {
    case TodoActionType.TODO_ADDED:
      return {
        ...state,
        todoList: tempTodoList.concat(state.todoToAdd),
        todoToAdd: defaultTodoToAdd(state.todoToAdd.id + 1)
      };
    case TodoActionType.TODO_DELETED:
      return {
        ...state,
        todoList: tempTodoList.filter(todo => todo.id !== action.payload.id)
      };
    case TodoActionType.START_TODO_EDITING:
      return {
        ...state,
        todoList: tempTodoList.filter(todo => todo.id === action.payload ? todo.isEditing = true : todo)
      };
    case TodoActionType.STOP_TODO_EDITING:
      return {
        ...state,
        todoList: tempTodoList.filter(todo => {
          if(todo.id === action.payload) {
            todo.isEditing = false;
          }
          return todo;
        })
      };
    case TodoActionType.TODO_UPDATED:
      tempTodoList.splice(action.payload.id, 1, action.payload)
      return {
        ...state,
        todoList: tempTodoList
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