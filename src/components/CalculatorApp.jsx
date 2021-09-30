import React from "react";
import ReactDOM from "react-dom";
import {
  isValidChar,
  isValidNumber,
  isValidOperator,
} from "../logic/validation/validation";
import {
  processNumberInput,
  processOperatorInput,
} from "../logic/calculator-logic/calculator-logic";
import Numpad from "./Numpad";

const appRoot = document.querySelector("#app");

class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keystrokes: "",
      calculatedValue: "",
      lastKeystroke: "",
    };
  }

  componentDidMount() {
    // remove event listener for keyboard when unmount
    window.addEventListener("keydown", this.handleKeydown.bind(this));
  }
  componentWillUnmount() {
    // add event listener for keyboard inputs
    window.removeEventListener("keydown", this.handleKeydown.bind(this));
  }

  handleOperatorInput(input) {
    if (!isValidChar(input) || !isValidOperator(input)) {
      // do some eroor handling
      return;
    }

    this.setState(({ keystrokes, calculatedValue, lastKeystroke }) => {
      const newKeystrokes = processOperatorInput({
        input,
        keystrokes,
        calculatedValue,
        lastKeystroke,
      });
      return newKeystrokes;
    });
  }

  handleValueInput(input) {
    if (!isValidChar(input) || !isValidNumber(input)) {
      // do some eroor handling
      return;
    }

    this.setState(({ keystrokes }) => {
      const newKeystrokes = processNumberInput({
        input,
        keystrokes,
      });
      return newKeystrokes;
    });
  }

  handleKeydown(e) {
    const key = e.key;

    // if escape is pressed, reset calculator
    if (key === "Escape") {
      this.handleOperatorInput("AC");
    }

    if (isValidNumber(key)) {
      this.handleValueInput(key);
    }

    if (isValidOperator(key)) {
      this.handleOperatorInput(key);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="calculator__result result">
            <output>
              {this.state.keystrokes || this.state.calculatedValue || 0}
            </output>
          </div>

          <Numpad
            handleValueInput={this.handleValueInput.bind(this)}
            handleOperatorInput={this.handleOperatorInput.bind(this)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CalculatorApp />, appRoot);
