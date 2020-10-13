import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./todoform.module.css";

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
    <section className={styles.add} hidden={showAdd}>
      <form className={styles.addForm} onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={styles.addInput}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          maxLength="57"
        />
        <button className={styles.addBtn}>Submit</button>
      </form>
    </section>
  );
};

Form.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default Form;
