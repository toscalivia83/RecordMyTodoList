import { RecordActionType, RecordAction } from "../../redux/actions";

export function startRecordingActionCreator(): RecordAction {
  return {
    type: RecordActionType.START_RECORDING
  };
}

export function stopRecordingActionCreator(): RecordAction {
  return {
    type: RecordActionType.STOP_RECORDING
  };
}

export function playRecordingActionCreator(): RecordAction {
  return {
    type: RecordActionType.PLAY_RECORDING
  };
}

export function clearRecordingActionCreator(): RecordAction {
  return {
    type: RecordActionType.CLEAR_RECORDING
  };
}