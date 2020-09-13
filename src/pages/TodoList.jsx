import React from "react";
import Paper from "../components/Paper";
import Header from "../components/Headers";
import Form from "../components/TodoForm";
import TodoList from "../components/Todos";

export default function App() {
  return (
    <Paper>
      <Header></Header>
      <Form></Form>
      <TodoList></TodoList>
    </Paper>
  );
}
