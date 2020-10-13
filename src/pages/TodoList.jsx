import React, { useState } from "react";
import Paper from "../components/paper/Paper";
import Header from "../components/header/Headers";
import Form from "../components/todoform/TodoForm";
import TodoList from "../components/todos/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [showAdd, setShowAdd] = useState(true);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value, isCompleted: false }];
    setTodos(addedTodo);
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const clearTodos = () => showAdd && setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
        todos={todos}
      />
      <Form addTodo={addTodo} showAdd={showAdd} />
      <TodoList todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
}
