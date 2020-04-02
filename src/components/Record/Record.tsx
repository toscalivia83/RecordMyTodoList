import React from "react";
import { AppState } from "../../redux/types";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import classnames from "classnames";
import { playRecordingActionCreator, startRecordingActionCreator, stopRecordingActionCreator, clearRecordingActionCreator } from "./action";
import styles from "./Record.module.css";

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

const Record = ({ isRecording, hasTodoListSuite, onPlayRecord, onRecord, onClearRecord, onStopRecord }: Props & RecordDispatchProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      {!hasTodoListSuite && !isRecording &&<button
        type="button"
        name="record"
        onClick={(): void => onRecord()}
        className={styles.recordButton}
      >Record</button>}

      {isRecording && <button
        type="button"
        name="stop"
        onClick={(): void => onStopRecord()}
        className={styles.recordButton}
      >Stop Recording</button>}

      {hasTodoListSuite && !isRecording && <button
        type="button"
        name="play"
        onClick={(): void => onPlayRecord()}
        className={styles.recordButton}
      >Play Recording</button>}

      {!isRecording && hasTodoListSuite && <button
        type="button"
        name="clear"
        onClick={(): void => onClearRecord()}
        className={styles.recordButton}
      >Clear Recording</button>}
    </div>
  );
};

const mapStateToProps = (state: AppState): Props => ({
  isRecording: state.record.isRecording,
  hasTodoListSuite: Boolean(state.todos.todoListSuite.length)
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
