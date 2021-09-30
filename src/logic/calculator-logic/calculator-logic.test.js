import { processNumberInput, processOperatorInput } from "./calculator";

// operator tests
test("2+2 should return calculated state when pressing equals (=)", () => {
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

test("AC should reset state of all ", () => {
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

test("if pressing equals (=) right after doing a calculation, it should return undefined ", () => {
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
test("if typing a second period on the same number, it will return undefined", () => {
  const obj = {
    keystrokes: ".",
    input: ".",
  };
  const result = processNumberInput(obj);
  expect(result).toBe(undefined);
});

test("if typing a second period on the same number, it will return undefined", () => {
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
