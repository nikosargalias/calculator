import React from "react";

const Button = ({
  value,
  handleInput,
  className,
  entity,
  ariaLabel,
  ariaDescribedBy,
} = {}) => {
  function handleOnClick() {
    handleInput(value);
  }

  return (
    <button
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel || ""}
      className={`${className}`}
      onClick={handleOnClick}
    >
      {entity || value}
    </button>
  );
};

export default Button;
