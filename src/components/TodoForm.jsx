import React, { useState } from "react";
import PropTypes from "prop-types";
const Form = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("ToDo Kosong!");
      return;
    }
    addTodo(value);
    setValue("");
  };

  return (
    <section className="add" hidden={showAdd}>
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength="57"
        />
        <button className="add-btn">Submit</button>
      </form>
    </section>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default Form;
