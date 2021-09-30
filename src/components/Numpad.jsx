import React from "react";

import Button from "./Button";

const Numpad = ({ handleValueInput, handleOperatorInput }) => {
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
        className="numpad__btn numpad__operator--ac numpad__btn--light"
      />
      <Button
        ariaLabel=""
        value="CE"
        handleInput={handleOperatorInput}
        className="numpad__btn numpad__operator--ce  numpad__btn--light"
      />
      <Button
        ariaLabel="division"
        ariaDescribedBy="calculator__numpad "
        value="/"
        entity="÷"
        handleInput={handleOperatorInput}
        className="numpad__btn numpad__operator--divide numpad__btn--accent"
      />

      {/* row 2 */}
      <Button
        ariaDescribedBy="calculator__numpad"
        value="7"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--7"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="8"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--8"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="9"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--9"
      />
      <Button
        ariaLabel="multiply"
        ariaDescribedBy="calculator__numpad"
        value="*"
        entity="×"
        handleInput={handleOperatorInput}
        className="numpad__btn numpad__operator--multiply numpad__btn--accent"
      />

      {/* row 3 */}
      <Button
        ariaDescribedBy="calculator__numpad"
        value="4"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--4"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="5"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--5"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="6"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--6"
      />
      <Button
        ariaLabel="subtract"
        ariaDescribedBy="calculator__numpad"
        value="-"
        entity="−"
        handleInput={handleOperatorInput}
        className="numpad__btn numpad__operator--subtract numpad__btn--accent"
      />

      {/* row 4 */}
      <Button
        ariaDescribedBy="calculator__numpad"
        value="1"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--1"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="2"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--2"
      />
      <Button
        ariaDescribedBy="calculator__numpad"
        value="3"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--3"
      />
      <Button
        ariaLabel="add"
        ariaDescribedBy="calculator__numpad"
        value="+"
        entity="+"
        handleInput={handleOperatorInput}
        className="numpad__btn numpad__operator--add numpad__btn--accent"
      />

      {/* row 5 */}
      <Button
        ariaDescribedBy="calculator__numpad"
        value="0"
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--0"
      />

      <Button
        ariaLabel="period"
        ariaDescribedBy="calculator__numpad"
        value="."
        handleInput={handleValueInput}
        className="numpad__btn numpad__value--period"
      />

      <Button
        ariaLabel="equals"
        ariaDescribedBy="calculator__numpad"
        value="="
        entity="="
        handleInput={handleOperatorInput}
        className="numpad__btn numpad__operator--equals numpad__btn--accent-2"
      />
    </div>
  );
};

export default Numpad;
