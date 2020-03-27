import React from "react";
import { TodoType } from "./components/DisplayTodo/DisplayTodo";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";

export class App extends React.Component {
  public constructor(props: AppProps) {
    super(props);
  }
  public render (): React.ReactElement {
    return (
      <div>
        <TodoList />
        <AddTodo />
      </div>
    );
  }
}

export interface AppProps {
  todoList: TodoType[];
  todoToAdd: TodoType;
}