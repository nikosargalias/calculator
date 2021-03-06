import { isValidNumber, isValidOperator } from "../validation/validation";

const formatNumber = (num) => {
  const numOfDecimalsPlaces = num.toString().split(".")[1]?.length;

  // NOTE: num.toFixed returns a string (this is unexpected behaviour as it is a method called on a number, so I am reconverting to number to return the same type as passed in)
  return Number.isInteger(num)
    ? Number(num.toFixed(0))
    : numOfDecimalsPlaces < 2
    ? Number(num.toFixed(1))
    : Number(num.toFixed(3));
};

function processOperatorInput({
  input,
  keystrokes,
  lastKeystroke,
  calculatedValue,
  history,
}) {
  //   Do not allow operator to be first input unless number has been inputed or a calculation has already been made which can be added to.
  if (!calculatedValue && !keystrokes) {
    return;
  }

  //   if last key pressed in period, return
  if (lastKeystroke === ".") {
    return;
  }

  if (input === "CE") {
    // normal implementation would be the following (please note, I haven't implemented completely due to time constraints)
    // if last keystroke is a number
    // remove last entry
    return {
      keystrokes: "",
      lastKeystroke: "CE",
    };
  }

  if (input === "AC") {
    return {
      keystrokes: "",
      calculatedValue: "",
      lastKeystroke: "",
    };
  }

  if (input === "=") {
    if (keystrokes) {
      let equation;
      if (isValidOperator(keystrokes[keystrokes.length - 1])) {
        equation = keystrokes.slice(0, keystrokes.length - 1);
      } else {
        equation = keystrokes;
      }
      const result = formatNumber(eval(equation));
      return {
        keystrokes: "",
        calculatedValue: result,
        lastKeystroke: input,
        history: [...history, { keystrokes, result }],
      };
    }

    // do nothing if you press equals (=) two+ times after a calculation has been made
    if (lastKeystroke === "=" && calculatedValue) {
      return;
    }
  }

  //   if calculation has been made but no new number values passed in then we assume you want to continue to add to the existing calculation, this is what this does. (if there is a calculatedValue, the input is not = and there are no new number values)
  if (calculatedValue && input !== "=" && !keystrokes) {
    return {
      keystrokes: calculatedValue + input,
      lastKeystroke: input,
    };
  }

  if (isValidOperator(keystrokes[keystrokes.length - 1])) {
    return {
      keystrokes: keystrokes.slice(0, keystrokes.length - 1) + input,
      lastKeystroke: input,
    };
  }

  return {
    keystrokes: keystrokes + input,
    lastKeystroke: input,
  };
}

function processNumberInput({ input, keystrokes }) {
  const getLastNumberFromKeystrokes = (keystrokes) => {
    const numberSetsSoFar = keystrokes.split(/[\+\-\*\/]/);
    return numberSetsSoFar[numberSetsSoFar.length - 1];
  };

  // Number cannot have 2 decimal places
  if (input === ".") {
    const lastNumSoFar = getLastNumberFromKeystrokes(keystrokes);
    if (lastNumSoFar.includes(".")) {
      return;
    }
  }

  //   preventing octal literals (00) if no other number has been provided (lastNumSoFar is empty)
  if (input === "0") {
    const lastNumSoFar = getLastNumberFromKeystrokes(keystrokes);
    if (lastNumSoFar.length === 0) {
      return;
    }
  }

  return {
    keystrokes: keystrokes + input,
    lastKeystroke: input,
  };
}

export { processNumberInput, processOperatorInput };
