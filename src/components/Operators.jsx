import React from "react";
import Input from "./Input";

const createValueBtns = (props) => {
  const inputValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

  return inputValues.map((value, i) => (
    <Input
      value={value}
      key={i}
      className={`operators__value--${value !== "." ? value : "period"}`}
      handleInput={props.handleInput}
    />
  ));
};

const createOperatorBtns = (props) => {
  const operatorBtns = [
    { className: "add", operator: "+", entity: "+" },
    { className: "subtract", operator: "-", entity: "−" },
    { className: "divide", operator: "/", entity: "÷" },
    { className: "multiply", operator: "*", entity: "×" },
    { className: "equals", operator: "=", entity: "=" },
  ];

  return operatorBtns.map(({ className, operator, entity }, i) => (
    <Input
      value={operator}
      entity={entity}
      className={`operators__operator--${className}`}
      key={i}
      handleInput={props.handleInput}
    />
  ));
};

const Operators = (props) => {
  return (
    (props.type === "values" && createValueBtns(props)) ||
    (props.type === "operations" && createOperatorBtns(props))
  );
};

export default Operators;
