import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Headers";
import Form from "../components/TodoForm";
import TodoList from "../components/Todos";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Testing1" },
    { text: "Testing2" },
    { text: "Testing3" },
    { text: "Testing4" }
  ]);
  return (
    <Paper>
      <Header />
      <Form />
      <TodoList todos={todos} />
    </Paper>
  );
}
