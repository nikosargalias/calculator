const add = (...nums) => {
  return nums.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );
};

const subtract = (prevValue, subtractAmount) => {
  return Number(prevValue) - Number(subtractAmount);
};

const divide = (prevValue, divideBy) => {
  return Number(prevValue) / Number(divideBy);
};

const multiply = (prevValue, multiplyBy) => {
  return Number(prevValue) * Number(multiplyBy);
};

// format number of decimal places that should be shown
const formatNumber = (num) => {
  const numOfDecimalsPlaces = num.toString().split(".")[1]?.length;

  return Number.isInteger(num)
    ? num.toFixed(0)
    : numOfDecimalsPlaces < 2
    ? num.toFixed(1)
    : num.toFixed(3);
};

const isValidNumber = (num) => {
  for (let i = 0; i < 10; i++) {
    if (num == i) return true;
  }
};

export { add, subtract, divide, multiply, formatNumber, isValidNumber };
