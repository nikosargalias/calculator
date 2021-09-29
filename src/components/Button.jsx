import React from "react";

const Button = ({ value, handleInput, className, entity } = {}) => {
  function handleOnClick() {
    console.log(handleInput);
    handleInput(value);
    // value && handleValueInput(value);
    // operator && handleOperatorInput(operator);
  }

  return (
    <li className={className}>
      <button className="operators__btn" onClick={handleOnClick}>
        {entity || value}
      </button>
    </li>
  );
};

export default Button;
