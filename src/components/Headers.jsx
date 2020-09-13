import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd }) => {
  return (
    <section className="header">
      <button className="header-btn" onClick={showAddToggle}>
        {showAdd ? "Add" : "Finish"}
      </button>
      <h1 className="header-title">ToDo List</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Header;
