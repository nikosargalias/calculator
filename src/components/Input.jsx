import React from "react";

const Input = ({ value, operator, handleInput, className, entity } = {}) => {
  function handleOnClick() {
    handleInput(value);
    // value && handleValueInput(value);
    // operator && handleOperatorInput(operator);
  }

  return (
    <li className={className}>
      <button className="operators__btn" onClick={handleOnClick}>
        {value || entity}
      </button>
    </li>
  );
};

export default Input;
