const operators = new Set(["+", "-", "/", "*", "=", "AC", "CE"]);
const validNumbers = new Set([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
]);

const isValidChar = (char) => operators.has(char) || validNumbers.has(char);

const isValidNumber = (num) => validNumbers.has(num);

const isValidOperator = (operator) => operators.has(operator);

export { isValidChar, isValidNumber, isValidOperator };
