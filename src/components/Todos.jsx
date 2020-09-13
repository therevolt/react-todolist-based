import React from "react";
import Todo from "./Todo";

const ListItem = () => {
  const todos = [
    {
      text: "Belajar React"
    }
  ];

  return (
    <section className="todos">
      {todos.map((item) => {
        return <Todo text={item.text} />;
      })}
    </section>
  );
};

export default ListItem;
