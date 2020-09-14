import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ showAddToggle, showAdd, clearTodos, todos }) => {
  return (
    <section className="header">
      <Button
        text={showAdd ? "Add" : "Finish"}
        onClick={showAddToggle}
        align="left"
      />
      <h1 className="header-title">ToDo List</h1>
      <Button
        text="Clear"
        onClick={clearTodos}
        disabled={todos.length === 0 ? true : false}
        color={todos.length === 0 ? "black" : "red"}
        align="right"
      />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
