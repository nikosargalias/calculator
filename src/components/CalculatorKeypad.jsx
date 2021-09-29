import React from "react";

import Input from "./Input";

const CalculatorKeypad = ({ handleValueInput, handleOperatorInput }) => {
  return (
    <ul className="calculator__operators operators">
      <Input
        value="AC"
        handleInput={handleOperatorInput}
        className="operators__operator--ac"
      />
      <Input
        value="CE"
        handleInput={handleOperatorInput}
        className="operators__operator--ce"
      />
      <Input
        value="/"
        entity="÷"
        handleInput={handleOperatorInput}
        className="operators__operator--divide"
      />

      {/* row 2 */}
      <Input
        value="7"
        handleInput={handleValueInput}
        className="operators__value--7"
      />
      <Input
        value="8"
        handleInput={handleValueInput}
        className="operators__value--8"
      />
      <Input
        value="9"
        handleInput={handleValueInput}
        className="operators__value--9"
      />
      <Input
        value="*"
        entity="×"
        handleInput={handleOperatorInput}
        className="operators__operator--multiply"
      />

      {/* row 3 */}
      <Input
        value="4"
        handleInput={handleValueInput}
        className="operators__value--4"
      />
      <Input
        value="5"
        handleInput={handleValueInput}
        className="operators__value--5"
      />
      <Input
        value="6"
        handleInput={handleValueInput}
        className="operators__value--6"
      />
      <Input
        value="-"
        entity="−"
        handleInput={handleOperatorInput}
        className="operators__operator--subtract"
      />

      {/* row 4 */}
      <Input
        value="1"
        handleInput={handleValueInput}
        className="operators__value--1"
      />
      <Input
        value="2"
        handleInput={handleValueInput}
        className="operators__value--2"
      />
      <Input
        value="3"
        handleInput={handleValueInput}
        className="operators__value--3"
      />
      <Input
        value="+"
        entity="+"
        handleInput={handleOperatorInput}
        className="operators__operator--add"
      />

      {/* row 5 */}
      <Input
        value="0"
        handleInput={handleValueInput}
        className="operators__value--0"
      />

      <Input
        value="."
        handleInput={handleValueInput}
        className="operators__value--period"
      />

      <Input
        value="="
        entity="="
        handleInput={handleOperatorInput}
        className="operators__operator--equals"
      />
    </ul>
  );
};

export default CalculatorKeypad;
