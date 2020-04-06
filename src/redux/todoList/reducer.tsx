import moment from "moment";
import { AppAction } from "../types";
import { TodoState, TodoType } from "./types";

const defaultTodoToAdd = (id: number): TodoType => ({
  id,
  name: "",
  description: "",
  creationDate: moment().format("LLL"),
});

const defaultTodoList: TodoState = {
  todoList: [],
  todoToAdd: defaultTodoToAdd(0),
  todoListSuite: [],
};

export const todoListReducer = (
  state = defaultTodoList,
  action: AppAction
): TodoState => {
  const tempTodoList = [...state.todoList];

  switch (action.type) {
    case "TODO_ADDED":
      return {
        ...state,
        todoList: tempTodoList.concat(state.todoToAdd),
        todoToAdd: defaultTodoToAdd(state.todoToAdd.id + 1),
        todoListSuite: [...state.todoListSuite].concat([
          tempTodoList.concat(state.todoToAdd),
        ]),
      };
    case "TODO_DELETED":
      return {
        ...state,
        todoList: tempTodoList.filter((todo) => todo.id !== action.payload.id),
        todoListSuite: [...state.todoListSuite].concat([
          tempTodoList.filter((todo) => todo.id !== action.payload.id),
        ]),
      };
    case "START_TODO_EDITING":
      // NOT IMPLEMENTED YET
      return state;
    case "STOP_TODO_EDITING":
      return {
        ...state,
        todoList: tempTodoList,
        todoListSuite: [...state.todoListSuite].concat([tempTodoList]),
      };
    case "TODO_UPDATED":
      tempTodoList.splice(action.payload.id, 1, action.payload);
      return {
        ...state,
        todoList: tempTodoList,
      };
    case "TODO_TO_ADD_CHANGED":
      return {
        ...state,
        todoToAdd: {
          ...state.todoToAdd,
          description: action.payload.description,
          name: action.payload.name,
        },
      };
    case "CLEAR_RECORDING":
      return {
        ...state,
        todoList: [],
        todoListSuite: [],
      };
    default:
      return state;
  }
};