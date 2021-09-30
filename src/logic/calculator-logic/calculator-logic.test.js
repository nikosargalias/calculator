import { processNumberInput, processOperatorInput } from "./calculator-logic";

describe("calculator-logic", () => {
  // operator tests
  test("processOperatorInput() should return set result of calculation to calculatedValue when input is ('=') and keystrokes is 2+2", () => {
    const obj = {
      keystrokes: "2+2",
      input: "=",
    };
    const result = processOperatorInput(obj);
    expect(result).toEqual({
      keystrokes: "",
      calculatedValue: 4,
      lastKeystroke: "=",
    });
  });

  test("processOperatorInput() should reset all state properties when input is 'AC' ", () => {
    const obj = {
      keystrokes: "2+2",
      input: "AC",
    };
    const result = processOperatorInput(obj);
    expect(result).toEqual({
      keystrokes: "",
      calculatedValue: "",
      lastKeystroke: "",
    });
  });

  test("processOperatorInput() should return undefined when input is '=' and keystrokes is empty", () => {
    const obj = {
      keystrokes: "",
      input: "=",
      lastKeystroke: "=",
      calculatedValue: "20",
    };
    const result = processOperatorInput(obj);
    expect(result).toBe(undefined);
  });

  // number tests
  test("processNumberInput() should return undefined if input is '.' and a period already exists on the same number (last number in keystrokes)", () => {
    const obj = {
      keystrokes: ".",
      input: ".",
    };
    const result = processNumberInput(obj);
    expect(result).toBe(undefined);
  });

  test("processNumberInput() should return existing keystrokes with 1 appended to it when input is '1'", () => {
    const obj = {
      keystrokes: "12+",
      input: "1",
    };
    const result = processNumberInput(obj);
    expect(result).toEqual({
      keystrokes: "12+1",
      lastKeystroke: "1",
    });
  });
});
