import React from "react";

const Input = ({ value, handleInput, className, entity } = {}) => {
  function handleOnClick() {
    handleInput(value);
  }

  return (
    <li className={className}>
      <button className="operators__btn" onClick={handleOnClick}>
        {entity || value}
      </button>
    </li>
  );
};

export default Input;
