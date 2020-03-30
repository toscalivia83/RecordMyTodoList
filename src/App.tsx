import React from "react";
import { TodoType } from "./components/DisplayTodo/DisplayTodo";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import Record from "./components/Record/Record";

export class App extends React.Component {
  public constructor(props: AppProps) {
    super(props);
  }

  public render (): React.ReactElement {
    return (
      <div>
        <TodoList />
        <AddTodo />
        <Record />
      </div>
    );
  }
}

export interface AppProps {
  todoList: TodoType[];
  todoToAdd: TodoType;
}