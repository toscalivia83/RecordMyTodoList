import { RecordAction, RecordActionType } from "../../redux/actions";
import { RecordState } from "../../redux/app";
import { TodoType } from "../Todo/Todo";

const defaultRecordReducer: RecordState = {
  todoListSuite: [],
  isRecording: false,
  todoListDisplayed: [],
  isDisplaying: false
};

export const recordReducer = (state = defaultRecordReducer, action: RecordAction): RecordState => {
  switch(action.type) {
    case RecordActionType.START_RECORDING:
      return {
        ...state,
        isRecording: true
      };
    case RecordActionType.STOP_RECORDING:
      return {
        ...state,
        isRecording: false
      };
    case RecordActionType.PLAY_RECORDING:
      return {
        ...state,
        isDisplaying: true
      };
    case RecordActionType.END_PLAY_RECORDING:
      return {
        ...state,
        isDisplaying: false
      };
    case RecordActionType.CLEAR_RECORDING:
      return {
        ...state,
        todoListSuite: []
      };
    case RecordActionType.SET_TODO_LIST_SUITE:
      return {
        ...state,
        todoListSuite: [...state.todoListSuite].concat([action.payload as TodoType[]])
      };
    default:
      return state;
  }
};
