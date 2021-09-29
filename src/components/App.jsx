import React from "react";
import ReactDOM from "react-dom";
import Operators from "./Operators";
import Button from "./Button";
import {
  isValidChar,
  isValidNumber,
  isValidOperator,
} from "../functionality/validation";
import {
  processNumberInput,
  processOperatorInput,
} from "../functionality/calculator/calculator";
import CalculatorKeypad from "./CalculatorKeypad";

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

  resetState() {
    this.setState(() => ({
      keystrokes: "",
      calculatedValue: "",
      lastOperator: "",
    }));
  }

  handleOperatorInput(input) {
    if (!isValidChar(input) || !isValidOperator(input)) return;

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
    if (!isValidChar(input) || !isValidNumber(input)) return;

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
          <div className="calculator__result">
            <p>{this.state.keystrokes || this.state.calculatedValue || 0}</p>
          </div>

          <CalculatorKeypad
            handleValueInput={this.handleValueInput.bind(this)}
            handleOperatorInput={this.handleOperatorInput.bind(this)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CalculatorApp />, appRoot);
