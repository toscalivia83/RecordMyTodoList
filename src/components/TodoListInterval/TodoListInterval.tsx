import React, { useState, useEffect } from "react";
import Todo, { TodoType } from "../Todo/Todo";
import { AppState } from "../../redux/app";
import { connect } from "react-redux";

interface Props {
  todoListSuite: TodoType[][];
}

const getTodoListDisplayed = (todoListSuite: TodoType[][], id: number): TodoType[] => todoListSuite[id];

const TodoListInterval = ({ todoListSuite }: Props): React.ReactElement => {
  const [displayedRecordIndex, setDisplayedRecordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedRecordIndex(displayedRecordIndex => {
        if (JSON.stringify(getTodoListDisplayed(todoListSuite, displayedRecordIndex)) != JSON.stringify(todoListSuite[todoListSuite.length - 1])) {
          return displayedRecordIndex + 1;
        } else {
          clearInterval(interval);
          return displayedRecordIndex;
        }
      });
    }, 1000);
  }, []);

  return (
    <div>
      {displayedRecordIndex} is the index.
      <div>
        {getTodoListDisplayed(todoListSuite, displayedRecordIndex).map((todo: TodoType) =>
          <Todo key={todo.id} {...todo} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState): Props => ({
  todoListSuite: state.todos.todoListSuite
});

export default connect(mapStateToProps)(TodoListInterval);