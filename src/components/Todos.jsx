import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const ListItem = ({ todos, completeTodo }) => {
  if (todos.length === 0) {
    return (
      <section className="todos-none">
        <p>Yuk Tambahkan ToDo mu!</p>
        <p>Tekan ADD Dikiri Atas, Dan Tuliskan ToDo mu</p>
        <p>Lalu Submit!</p>
        <p>Yeay! Kamu Berhasil Membuat ToDo!</p>
      </section>
    );
  } else {
    return (
      <section className="todos">
        {todos.map((todos, index) => {
          return (
            <Todo
              key={index}
              text={todos.text}
              isCompleted={todos.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      </section>
    );
  }
};

ListItem.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default ListItem;
