import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color, disabled, align }) => {
  const classNames = [
    "header-btn",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color",
    align === "left" && "align-left",
    align === "right" && "align-right"
  ].join(" ");

  if (disabled) {
    return (
      <button className={classNames} onClick={onClick} disabled>
        {text}
      </button>
    );
  } else {
    return (
      <button className={classNames} onClick={onClick}>
        {text}
      </button>
    );
  }
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  disable: PropTypes.bool,
  align: PropTypes.oneOf(["left", "right"])
};

export default Button;
