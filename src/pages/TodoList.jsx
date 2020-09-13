import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Headers";
import Form from "../components/TodoForm";
import TodoList from "../components/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];
    setTodos(addedTodo);
  };

  return (
    <Paper>
      <Header />
      <Form addTodo={addTodo} />
      <TodoList todos={todos} />
    </Paper>
  );
}
