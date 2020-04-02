import React from "react";
import { AppState, TodoType } from "./redux/types";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import Record from "./components/Record/Record";
import TodoListInterval from "./components/TodoListInterval/TodoListInterval";
import { connect } from "react-redux";
import Header from "./components/Header/Header";

class App extends React.Component<AppProps> {
  public constructor(props: AppProps) {
    super(props);
  }

  public render (): React.ReactElement {
    return (
      <div>
        <Header />
        {
          this.props.isDisplayingRecord
            ? <TodoListInterval />
            :
            <>
              <TodoList />
              <AddTodo />
              <Record />
            </>
        }
      </div>
    );
  }
}

export interface AppProps {
  todoList: TodoType[];
  todoToAdd: TodoType;
  isDisplayingRecord: boolean;
}

const mapStateToProps = (state: AppState): AppProps => ({
  isDisplayingRecord: Boolean(state.record.isDisplaying),
  todoList: state.todos.todoList,
  todoToAdd: state.todos.todoToAdd,
});

export default connect(mapStateToProps)(App);