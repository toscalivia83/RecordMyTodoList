import React, { useState, useEffect } from "react";
import Todo from "../Todo/Todo";
import { AppState } from "../../redux/types";
import { TodoType } from "../../redux/todoList/types";
import { connect } from "react-redux";

const INTERVAL_VALUE = 1000;

interface Props {
  todoListSuite: TodoType[][];
}

const getTodoListDisplayed = (todoListSuite: TodoType[][], id: number): TodoType[] => todoListSuite[id];

const TodoListInterval = ({ todoListSuite }: Props): React.ReactElement => {
  const [displayedRecordIndex, setDisplayedRecordIndex] = useState(0);
  const [recordPlayEnded, setRecordPlayEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedRecordIndex(displayedRecordIndex => {
        if (JSON.stringify(getTodoListDisplayed(todoListSuite, displayedRecordIndex)) != JSON.stringify(todoListSuite[todoListSuite.length - 1])) {
          return displayedRecordIndex + 1;
        } else {
          clearInterval(interval);
          setRecordPlayEnded(true);
          return displayedRecordIndex;
        }
      });
    }, INTERVAL_VALUE);
  }, []);

  return (
    <div>
      <div id="todoListInterval">
        {getTodoListDisplayed(todoListSuite, displayedRecordIndex)
          .map((todo: TodoType) =>
            <Todo key={todo.id} {...todo} />
          )}
      </div>
      {recordPlayEnded && "End of the record :)"}
    </div>
  );
};

const mapStateToProps = (state: AppState): Props => ({
  todoListSuite: state.todos.todoListSuite
});

export default connect(mapStateToProps)(TodoListInterval);