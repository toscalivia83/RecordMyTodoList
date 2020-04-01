import moment from "moment";
import { TodoActionType, TodoAction } from "../../redux/actions";
import { TodoState, TodoType } from "../../redux/types";

const defaultTodoToAdd = (id: number): TodoType => ({
  id,
  name: "",
  description: "",
  creationDate: moment().format("LLL")
});

const defaultTodoList: TodoState = {
  todoList: [],
  todoToAdd: defaultTodoToAdd(0),
  todoListSuite: [],
};

export const todoListReducer = (state = defaultTodoList, action: TodoAction): TodoState => {
  const tempTodoList = [...state.todoList];
  const payload = action.payload as TodoType;
  switch (action.type) {
    case TodoActionType.TODO_ADDED:
      return {
        ...state,
        todoList: tempTodoList.concat(state.todoToAdd),
        todoToAdd: defaultTodoToAdd(state.todoToAdd.id + 1),
        todoListSuite: [...state.todoListSuite]
          .concat(
            [tempTodoList.concat(state.todoToAdd)]
          )
      };
    case TodoActionType.TODO_DELETED:
      return {
        ...state,
        todoList: tempTodoList.filter(todo => todo.id !== payload.id),
        todoListSuite: [...state.todoListSuite]
          .concat(
            [tempTodoList.filter(todo => todo.id !== payload.id)]
          )
      };
    case TodoActionType.STOP_TODO_EDITING:
      return {
        ...state,
        todoList: tempTodoList,
        todoListSuite: [...state.todoListSuite]
          .concat([tempTodoList])
      };
    case TodoActionType.TODO_UPDATED:
      tempTodoList.splice(payload.id, 1, payload);
      return {
        ...state,
        todoList: tempTodoList,
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
    default:
      return state;
  }
};