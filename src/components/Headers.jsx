import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd, clearTodos, todos }) => {
  if (todos.length === 0) {
    return (
      <section className="header">
        <button className="header-btn" onClick={showAddToggle}>
          {showAdd ? "Add" : "Finish"}
        </button>
        <h1 className="header-title">ToDo List</h1>
        <button className="header-btn-disable" onClick={clearTodos} disabled>
          Clear
        </button>
      </section>
    );
  } else {
    return (
      <section className="header">
        <button className="header-btn" onClick={showAddToggle}>
          {showAdd ? "Add" : "Finish"}
        </button>
        <h1 className="header-title">ToDo List</h1>
        <button className="header-btn main-red-color" onClick={clearTodos}>
          Clear
        </button>
      </section>
    );
  }
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
