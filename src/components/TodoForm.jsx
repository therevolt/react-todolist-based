import React, { useState } from "react";
import PropTypes from "prop-types";
const Form = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("ToDo Kosong!");
      return;
    }

    alert(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn">Submit</button>
      </form>
    </section>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired
};
export default Form;
