import { AppAction } from "../types";
import { RecordState } from "./types";

const defaultRecordReducer: RecordState = {
  isRecording: false,
  isDisplaying: false,
};

export const recordReducer = (
  state = defaultRecordReducer,
  action: AppAction
): RecordState => {
  switch (action.type) {
    case "START_RECORDING":
      return {
        ...state,
        isRecording: true,
      };
    case "STOP_RECORDING":
      return {
        ...state,
        isRecording: false,
      };
    case "PLAY_RECORDING":
      return {
        ...state,
        isDisplaying: true,
      };
    case "END_PLAY_RECORDING":
      return {
        ...state,
        isDisplaying: false,
      };
    case "CLEAR_RECORDING":
      return {
        ...state,
      };
    default:
      return state;
  }
};