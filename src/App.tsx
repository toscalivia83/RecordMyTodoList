import React from "react";
import { AppState } from "./redux/types";
import { TodoType } from "./redux/todoList/types";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import Record from "./components/Record/Record";
import TodoListInterval from "./components/TodoListInterval/TodoListInterval";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import styles from "./App.module.css";

const App: React.FC<AppProps> = ({ isDisplayingRecord }: AppProps) => {
  return (
    <div>
      <Header />
      {isDisplayingRecord ? 
        <TodoListInterval />
        : 
        <div className={styles.content}>
          <div className={styles.todos}>
            <AddTodo />
            <TodoList />
          </div>
          <Record />
        </div>
      }
    </div>
  );
};

export interface AppProps {
  todoList: TodoType[];
  todoToAdd: TodoType;
  isDisplayingRecord: boolean;
}

const mapStateToProps = (state: AppState): AppProps => ({
  isDisplayingRecord: state.record.isDisplaying,
  todoList: state.todos.todoList,
  todoToAdd: state.todos.todoToAdd,
});

export default connect(mapStateToProps)(App);