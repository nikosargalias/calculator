const isValidNumber = (num) => {
  const validNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  return validNumbers.includes(num) ? true : false;
};

const isValidOperator = (operator) => {
  const operators = ["+", "-", "/", "*", "="];
  return operators.includes(operator) ? true : false;
};

export { isValidNumber, isValidOperator };
