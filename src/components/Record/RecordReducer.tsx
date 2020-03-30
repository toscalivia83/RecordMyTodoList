import { RecordAction, RecordActionType } from "../../redux/actions";
import { RecordState } from "../../redux/app";

const defaultTodoListSuite = [
  [
    {
      id: 0,
      name: "test",
      description: "qwer",
      creationDate: "1585571405116",
      isEditing: false
    }
  ],
  [
    {
      id: 0,
      name: "test",
      description: "qwer",
      creationDate: "1585571405116",
      isEditing: false
    },
    {
      id: 1,
      name: "test",
      description: "wsdef",
      creationDate: "1585571424963",
      isEditing: false
    }
  ],
  [
    {
      id: 0,
      name: "test",
      description: "qwersdf",
      creationDate: "1585571405116",
      isEditing: false
    },
    {
      id: 1,
      name: "test",
      description: "wsdef",
      creationDate: "1585571424963",
      isEditing: false
    }
  ],
  [
    {
      id: 0,
      name: "test",
      description: "qwersdf",
      creationDate: "1585571405116",
      isEditing: false
    },
    {
      id: 1,
      name: "test",
      description: "wsdef",
      creationDate: "1585571424963",
      isEditing: false
    },
    {
      id: 2,
      name: "test",
      description: "wsdef",
      creationDate: "1585571437561",
      isEditing: false
    }
  ]
];

const defaultRecordReducer: RecordState = {
  todoListSuite: defaultTodoListSuite,
  isRecording: false,
  displayedRecordId: undefined,
  todoListDisplayed: []
};

// all next actions will be saved this way:
//  in TodoList component, it now displays record.todoList instead of todoList
// if click on Add: push a new todo to record.todoList with id+1 and name entered
// if click on Delete: splice of the related index in record.todoList to delete
// if update: splice of the related index in record.todoList to update

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
        isRecording: false,
        todoListSuite: defaultTodoListSuite
      };
    case RecordActionType.PLAY_RECORDING:
      return {
        ...state,
        displayedRecordId: 1
      };
    case RecordActionType.END_PLAY_RECORDING:
      return {
        ...state,
        displayedRecordId: undefined
      };
    case RecordActionType.CLEAR_RECORDING:
      return {
        ...state,
        todoListSuite: [],
        displayedRecordId: undefined
      };
    default:
      return state;
  }
};
