import React from "react";

import Button from "./Button";

const CalculatorNumpad = ({ handleValueInput, handleOperatorInput }) => {
  return (
    <div
      role="group"
      aria-label="calculator numpad"
      className="calculator__numpad numpad"
      id="calculator__numpad"
    >
      <Button
        ariaLabel="reset"
        ariaDescribedBy="calculator__numpad"
        value="AC"
        handleInput={handleOperatorInput}
        className="numpad__operator--ac"
      />
      <Button
        ariaLabel=""
        value="CE"
        handleInput={handleOperatorInput}
        className="numpad__operator--ce"
      />
      <Button
        ariaLabel="division"
        ariaDescribedBy="calculator__numpad"
        value="/"
        entity="÷"
        handleInput={handleOperatorInput}
        className="numpad__operator--divide"
      />

      {/* row 2 */}
      <Button
        ariaDescribedBy="calculator__numpad"
        value="7"
        handleInput={handleValueInput}
        className="numpad__value--7"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="8"
        handleInput={handleValueInput}
        className="numpad__value--8"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="9"
        handleInput={handleValueInput}
        className="numpad__value--9"
      />
      <Button
        ariaLabel="multiply"
        ariaDescribedBy="calculator__numpad"
        value="*"
        entity="×"
        handleInput={handleOperatorInput}
        className="numpad__operator--multiply"
      />

      {/* row 3 */}
      <Button
        ariaDescribedBy="calculator__numpad"
        value="4"
        handleInput={handleValueInput}
        className="numpad__value--4"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="5"
        handleInput={handleValueInput}
        className="numpad__value--5"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="6"
        handleInput={handleValueInput}
        className="numpad__value--6"
      />
      <Button
        ariaLabel="subtract"
        ariaDescribedBy="calculator__numpad"
        value="-"
        entity="−"
        handleInput={handleOperatorInput}
        className="numpad__operator--subtract"
      />

      {/* row 4 */}
      <Button
        ariaDescribedBy="calculator__numpad"
        value="1"
        handleInput={handleValueInput}
        className="numpad__value--1"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="2"
        handleInput={handleValueInput}
        className="numpad__value--2"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="3"
        handleInput={handleValueInput}
        className="numpad__value--3"
      />
      <Button
        ariaLabel="add"
        ariaDescribedBy="calculator__numpad"
        value="+"
        entity="+"
        handleInput={handleOperatorInput}
        className="numpad__operator--add"
      />

      {/* row 5 */}
      <Button
        ariaDescribedBy="calculator__numpad"
        value="0"
        handleInput={handleValueInput}
        className="numpad__value--0"
      />

      <Button
        ariaLabel="period"
        ariaDescribedBy="calculator__numpad"
        value="."
        handleInput={handleValueInput}
        className="numpad__value--period"
      />

      <Button
        ariaLabel="equals"
        ariaDescribedBy="calculator__numpad"
        value="="
        entity="="
        handleInput={handleOperatorInput}
        className="numpad__operator--equals"
      />
    </div>
  );
};

export default CalculatorNumpad;
