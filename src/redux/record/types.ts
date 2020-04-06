export interface RecordState {
  isDisplaying: boolean;
  isRecording: boolean;
}

interface START_RECORDING {
  type: "START_RECORDING";
}
interface STOP_RECORDING {
  type: "STOP_RECORDING";
}
interface PLAY_RECORDING {
  type: "PLAY_RECORDING";
}
interface END_PLAY_RECORDING {
  type: "END_PLAY_RECORDING";
}
interface CLEAR_RECORDING {
  type: "CLEAR_RECORDING";
}

export type RecordAction =
  | START_RECORDING
  | STOP_RECORDING
  | PLAY_RECORDING
  | END_PLAY_RECORDING
  | CLEAR_RECORDING;