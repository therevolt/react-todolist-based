import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import style from "./button.module.css";

const Button = ({ text, onClick, color, disabled, align }) => {
  const classNames = cx(style.headerBtn, {
    [style.mainRedColor]: color === "red",
    [style.alignLeft]: align === "left",
    [style.alignRight]: align === "right"
  });

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
