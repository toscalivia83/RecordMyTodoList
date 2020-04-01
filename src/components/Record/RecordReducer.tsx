import { RecordAction, RecordActionType } from "../../redux/actions";
import { RecordState } from "../../redux/types";

const defaultRecordReducer: RecordState = {
  todoListSuite: [],
  isRecording: false,
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
    default:
      return state;
  }
};
