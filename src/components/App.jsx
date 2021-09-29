import React from "react";
import ReactDOM from "react-dom";
import Operators from "./Operators";
import { add, subtract, divide, multiply, formatNumber } from "./mathHandlers";
import { isValidNumber, isValidOperator } from "./validation";
import {
  addKeyboardEventListeners,
  removeKeyboardEventListeners,
} from "./accessibility";

const appRoot = document.querySelector("#app");

class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calculation: "",
      operatorInMemory: "",
      valueInMemory: "",
      keystrokes: "",
      calculatedValue: "",
      lastKeyStroke: "",
    };
  }

  componentWillUnmount() {
    // add event listener for keyboard inputs
    removeKeyboardEventListeners(this.handleKeydown.bind(this));
  }
  componentDidMount() {
    // remove event listener for keyboard when unmount
    addKeyboardEventListeners(this.handleKeydown.bind(this));
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  calculateEquation(prevValue, valueInMemory, operator) {
    let newValue;

    switch (operator) {
      case "/":
        newValue = divide(prevValue, valueInMemory);
        break;
      case "+":
        newValue = add(prevValue, valueInMemory);
        break;
      case "-":
        newValue = subtract(prevValue, valueInMemory);
        break;
      case "*":
        newValue = multiply(prevValue, valueInMemory);
        break;
    }

    return formatNumber(newValue);
  }

  resetState() {
    this.setState(() => ({
      calculation: "",
      operatorInMemory: "",
      valueInMemory: "",
      keystrokes: "",
      calculatedValue: "",
      lastKeyStroke: "",
    }));
  }

  appendToInitialValue(value) {
    this.setState(({ keystrokes, calculation, calculatedValue }) => {
      return {
        calculation: calculation + value,
        keystrokes: keystrokes + value,
        lastKeyStroke: value,
        calculatedValue: calculatedValue + value,
      };
    });
  }

  setInitialValue(value) {
    this.setState(() => {
      return {
        calculation: value,
        operatorInMemory: "",
        keystrokes: value,
        lastKeyStroke: value,
        calculatedValue: value,
      };
    });
  }

  setCalculation() {
    this.setState(
      ({ calculation, valueInMemory, operatorInMemory, keystrokes }) => {
        const newValue = this.calculateEquation(
          calculation,
          valueInMemory,
          operatorInMemory
        );

        return {
          calculation: newValue,
        };
      }
    );
  }

  setOperator(operator) {
    this.setState(({ keystrokes, lastKeyStroke }) => {
      return {
        operatorInMemory: operator,
        lastKeyStroke: operator,
        keystrokes: isValidNumber(lastKeyStroke)
          ? keystrokes + operator
          : keystrokes.slice(0, -1) + operator,
        // replaces last value of keystrokes if last and new are both operators
      };
    });
  }

  setValueInMemory(value) {
    this.setState(({ keystrokes, valueInMemory }) => {
      return {
        valueInMemory: valueInMemory + value,
        keystrokes: keystrokes + value,
        lastKeyStroke: value,
      };
    });
  }

  setTempCalculation() {
    this.setState(({ valueInMemory, operatorInMemory, calculation } = {}) => {
      let newValue = this.calculateEquation(
        calculation,
        valueInMemory,
        operatorInMemory
      );

      return {
        calculatedValue: newValue ?? valueInMemory,
      };
    });
  }

  setStateAfterCalculation(operator) {
    this.setState(({ keystrokes }) => {
      return {
        operatorInMemory: operator,
        valueInMemory: "",
        keystrokes: operator === "=" ? "" : keystrokes + operator,
        lastKeyStroke: operator,
      };
    });
  }

  handleOperatorInput(operator) {
    // If operator is first keystroke do nothing
    if (
      operator &&
      !this.state.calculatedValue &&
      this.state.calculatedValue !== 0
    )
      return;

    // if operator followed by number followed by another operator
    if (operator && this.state.operatorInMemory && this.state.valueInMemory) {
      this.setCalculation();
      this.setStateAfterCalculation(operator);
      return;
    }

    // sets operator if calculation doesn't get made
    if (operator) {
      this.setOperator(operator);
      return;
    }
  }

  handleValueInput(value) {
    const isValidValue = !isNaN(value) || value === ".";

    // If number pressed directly after pressing =
    if (isValidValue && this.state.operatorInMemory === "=") {
      this.setInitialValue(value);
      return;
    }

    // number pressed first time without having pressed anything else or number pressed again without any operators in queue.
    if (
      (isValidValue &&
        !this.state.operatorInMemory &&
        !this.state.valueInMemory) ||
      (isValidValue &&
        !this.state.calculation &&
        this.state.calculatedValue !== 0)
    ) {
      this.appendToInitialValue(value);
      return;
    }

    // sets valueInMemory if calculation doesn't get made
    if (value) {
      this.setValueInMemory(value);
      this.setTempCalculation(value);
      return;
    }
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
            <p>{this.state.calculatedValue || 0}</p>
            {/* <span className="calculator__result--auto">
              {this.state.calculation}
            </span> */}
            <p className="calculator__result--main">
              {this.state.keystrokes || 0}
            </p>
          </div>
          <ul className="calculator__operators operators">
            <Operators
              type="operations"
              handleOperatorInput={this.handleOperatorInput.bind(this)}
            />
            <Operators
              type="values"
              handleValueInput={this.handleValueInput.bind(this)}
            />
            <button
              className="operators__btn"
              onClick={this.resetState.bind(this)}
            >
              AC
            </button>
            <button
              className="operators__btn"
              onClick={this.resetState.bind(this)}
            >
              CE
            </button>
          </ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CalculatorApp />, appRoot);
