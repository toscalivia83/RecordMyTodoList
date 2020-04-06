import { RecordAction } from "./types";

export function startRecordingActionCreator(): RecordAction {
  return {
    type: "START_RECORDING"
  };
}

export function stopRecordingActionCreator(): RecordAction {
  return {
    type: "STOP_RECORDING"
  };
}

export function playRecordingActionCreator(): RecordAction {
  return {
    type: "PLAY_RECORDING"
  };
}

export function clearRecordingActionCreator(): RecordAction {
  return {
    type: "CLEAR_RECORDING"
  };
}