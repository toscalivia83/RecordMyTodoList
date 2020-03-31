import { TodoActionType, TodoAction } from "../../redux/actions";
import { TodoType } from "../Todo/Todo";
import { TodoState } from "../../redux/app";

const defaultTodoToAdd = (id: number): TodoType => ({
  id,
  name: "",
  description: "",
  creationDate: Date.now().toString(),
  isEditing: false
});

const defaultTodoList: TodoState = {
  todoList: [],
  todoToAdd: defaultTodoToAdd(0)
};

export const todoListReducer = (state = defaultTodoList, action: TodoAction): { todoList: TodoType[]; todoToAdd: TodoType } => {
  const tempTodoList = [...state.todoList];
  const payload = action.payload as TodoType;
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
        todoList: tempTodoList.filter(todo => todo.id !== payload.id)
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
      tempTodoList.splice(payload.id, 1, payload);
      return {
        ...state,
        todoList: tempTodoList
      };
    case TodoActionType.TODO_TO_ADD_CHANGED:
      return {
        ...state,
        todoToAdd: {
          ...state.todoToAdd,
          description: payload.description,
          name: payload.name
        }
      };
    case TodoActionType.SET_RECORDED_TODO_LIST_DISPLAYED:
      return {
        ...state,
        todoList: action.payload as TodoType[]
      };
    default:
      return state;
  }
};