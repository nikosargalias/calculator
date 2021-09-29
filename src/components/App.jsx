import React from "react";
import ReactDOM from "react-dom";
import Operators from "./Operators";
import {
  isValidChar,
  isValidNumber,
  isValidOperator,
} from "../functionality/validation";

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

  componentDidUpdate() {
    console.log(this.state);
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
      calculation: "",
      operatorInMemory: "",
      valueInMemory: "",
      keystrokes: "",
      calculatedValue: "",
      lastKeyStroke: "",
    }));
  }

  handleInput(input) {
    if (!isValidChar(input)) {
      // handle error here if input is not part of valid set - this should be considered and error and possiby an attack.
    }

    // replace prev operator with new one if recurring
    // can't start with an operator
    this.setState(({ keystrokes }) => {
      if (isValidOperator(input)) {
        // if equals
        if (input === "=") {
          let equation;
          if (isValidOperator(keystrokes[keystrokes.length - 1])) {
            equation = keystrokes.slice(0, keystrokes.length - 1);
          } else {
            equation = keystrokes;
          }
          const result = eval(equation);
          return {
            keystrokes: "",
            calculatedValue: result,
          };
        }

        if (keystrokes.endsWith(input)) {
          return {
            keystrokes: keystrokes.slice(0, keystrokes.length - 1) + input,
          };
        }
        return {
          keystrokes: keystrokes + input,
        };
      }

      if (isValidNumber(input)) {
        // Number cannot have 2 decimal places
        if (input === ".") {
          const numberSetsSoFar = keystrokes.split(/[\+\-\*\/]/);
          const lastNumSoFar = numberSetsSoFar[numberSetsSoFar.length - 1];
          if (lastNumSoFar.includes(".")) {
            return;
          }
        }
        return {
          keystrokes: keystrokes + input,
        };
      }
    });

    // if equals do calculation even if last keystroke was operator

    // we'll assume the initial value is 0
  }

  handleOperatorInput(operator) {
    this.handleInput(operator);
  }

  handleValueInput(value) {
    this.handleInput(value);
  }

  handleKeydown(e) {
    const key = e.key;
    if (isValidNumber(key)) {
      this.handleInput(key);
    }

    if (isValidOperator(key)) {
      this.handleInput(key);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="calculator__result">
            {/* <p>{this.state.calculation || 0}</p> */}
            {/* <span className="calculator__result--auto">
              {this.state.calculation}
            </span> */}
            <p className="calculator__result--main">
              {this.state.keystrokes || this.state.calculatedValue || 0}
            </p>
          </div>
          <ul className="calculator__operators operators">
            <Operators
              type="operations"
              handleInput={this.handleInput.bind(this)}
            />
            <Operators
              type="values"
              handleInput={this.handleInput.bind(this)}
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
