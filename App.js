import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a todo app', completed: false },
    { id: 3, text: 'Deploy to production', completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

return (
  <div className="app">
    <h1>Todo List</h1>
    <AddTodo onAdd={addTodo} />
    <TodoList 
      todos={todos} 
      onToggle={toggleTodo} 
      onDelete={deleteTodo}  
    />
  </div>
);
}

export default App;