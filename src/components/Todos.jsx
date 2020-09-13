import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const ListItem = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todos) => {
        return <Todo key={todos.text} text={todos.text} />;
      })}
    </section>
  );
};

ListItem.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default ListItem;
