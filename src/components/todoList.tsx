import React from 'react'
import './styles.css';
import { Todo } from '../models';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const todoList: React.FC<Props>  = ({todos, setTodos}) => {
  return (
    <div className="todos">
      {
        todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <span>{todo.todo}</span>
            <button onClick={() => setTodos(todos.filter(t => t.id !== todo.id))}>Delete</button>
          </div>
        ))
      }

    </div>
  )
};

export default todoList;
