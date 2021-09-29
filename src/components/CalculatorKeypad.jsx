import React from "react";
import Input from "./Input";
import Button from "./Button";

const CalculatorKeypad = ({ handleValueInput, handleOperatorInput }) => {
  return (
    <ul className="calculator__operators operators">
      <Button
        value="AC"
        handleInput={handleOperatorInput}
        className="operators__operator--ac"
      />
      <Button
        value="CE"
        handleInput={handleOperatorInput}
        className="operators__operator--ce"
      />
      <Button
        value="/"
        entity="÷"
        handleInput={handleOperatorInput}
        className="operators__operator--divide"
      />

      {/* row 2 */}
      <Button
        value="7"
        handleInput={handleValueInput}
        className="operators__value--7"
      />
      <Button
        value="8"
        handleInput={handleValueInput}
        className="operators__value--8"
      />
      <Button
        value="9"
        handleInput={handleValueInput}
        className="operators__value--9"
      />
      <Button
        value="*"
        entity="×"
        handleInput={handleOperatorInput}
        className="operators__operator--multiply"
      />

      {/* row 3 */}
      <Button
        value="4"
        handleInput={handleValueInput}
        className="operators__value--4"
      />
      <Button
        value="5"
        handleInput={handleValueInput}
        className="operators__value--5"
      />
      <Button
        value="6"
        handleInput={handleValueInput}
        className="operators__value--6"
      />
      <Button
        value="-"
        entity="−"
        handleInput={handleOperatorInput}
        className="operators__operator--subtract"
      />

      {/* row 4 */}
      <Button
        value="1"
        handleInput={handleValueInput}
        className="operators__value--1"
      />
      <Button
        value="2"
        handleInput={handleValueInput}
        className="operators__value--2"
      />
      <Button
        value="3"
        handleInput={handleValueInput}
        className="operators__value--3"
      />
      <Button
        value="+"
        entity="+"
        handleInput={handleOperatorInput}
        className="operators__operator--add"
      />

      {/* row 5 */}
      <Button
        value="0"
        handleInput={handleValueInput}
        className="operators__value--0"
      />

      <Button
        value="."
        handleInput={handleValueInput}
        className="operators__value--period"
      />

      <Button
        value="="
        entity="="
        handleInput={handleOperatorInput}
        className="operators__operator--equals"
      />
    </ul>
  );
};

export default CalculatorKeypad;
