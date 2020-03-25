import * as React from 'react';
import { connect } from 'react-redux';
import Todo, { TodoType } from '../Todo/Todo';
import { AppState } from '../../redux/app';
import { todoAddedActionCreator, todoToAddChangedActionCreator } from './action';
import { Dispatch } from 'redux';

const TodoList = ({ todoList, todoToAdd, addTodo, todoToAddChanged }: Props & DispatchProps) => (
  <div>
     {todoList.map((todo) =>
        <Todo key={todo.id} {...todo}/>
      )}
      <input
        type="text"
        name="todoToAdd"
        value={todoToAdd.description}
        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
          todoToAddChanged({
            id: todoToAdd.id,
            name: 'test',
            description: event.target.value,
            creationDate: 'now'
          })
        }/>
      <button onClick={(): void => addTodo()}>Add</button>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  todoList: state.todoList,
  todoToAdd: {}
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  addTodo: (): void => {dispatch(todoAddedActionCreator())},
  todoToAddChanged: (todo: TodoType): void => {dispatch(todoToAddChangedActionCreator(todo))}
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

interface Props {
  todoList: TodoType[];
  todoToAdd: TodoType;
}

interface DispatchProps {
  addTodo: Function;
  todoToAddChanged: Function;
}