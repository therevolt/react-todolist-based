import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Headers";
import Form from "../components/TodoForm";
import TodoList from "../components/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [showAdd, setShowAdd] = useState(true);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];
    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />
      <Form addTodo={addTodo} showAdd={showAdd} />
      <TodoList todos={todos} />
    </Paper>
  );
}
