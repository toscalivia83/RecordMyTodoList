import React from "react";
import { AppState } from "../../redux/app";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { playRecordingActionCreator, startRecordingActionCreator, stopRecordingActionCreator, clearRecordingActionCreator } from "./action";

const Record = ({ isRecording, hasTodoListSuite, onPlayRecord, onRecord, onClearRecord, onStopRecord }: Props & RecordDispatchProps): React.ReactElement => {
  return (
    <div>
      {!isRecording &&<button
        type="button"
        name="record"
        onClick={(): void => onRecord()}
      >Record</button>}

      {isRecording && <button
        type="button"
        name="stop"
        onClick={(): void => onStopRecord()}
      >Stop Recording</button>}

      {<button
        type="button"
        name="play"
        onClick={(): void => onPlayRecord()}
      >Play Recording</button>}

      {!isRecording && hasTodoListSuite && <button
        type="button"
        name="clear"
        onClick={(): void => onClearRecord()}
      >Clear Recording</button>}
    </div>
  );
};

const mapStateToProps = (state: AppState): Props => ({
  isRecording: state.record.isRecording,
  hasTodoListSuite: Boolean(state.record.todoListSuite.length)
});

const mapDispatchToProps = (dispatch: Dispatch): RecordDispatchProps => ({
  onRecord: (): void => {
    dispatch(startRecordingActionCreator());
  },
  onStopRecord: (): void => {
    dispatch(stopRecordingActionCreator());
  },
  onPlayRecord: (): void => {
    dispatch(playRecordingActionCreator()); 
  },
  onClearRecord: (): void => {
    dispatch(clearRecordingActionCreator()); 
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Record);

interface Props {
  isRecording: boolean;
  hasTodoListSuite: boolean;
}

interface RecordDispatchProps {
  onRecord: Function;
  onStopRecord: Function;
  onPlayRecord: Function;
  onClearRecord: Function;
}