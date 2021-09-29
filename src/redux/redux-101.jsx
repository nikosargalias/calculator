import { createStore } from "redux";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer);

// Reducers
// 1. Reducers are pure functions because they never mutate state or action, simply return a new object.
function counterReducer(
  state = { count: 0 },
  { type, incrementBy, decrementBy, count } = {}
) {
  // Helper function for error checking
  const isInvalidNum = (typeToCheck, num) =>
    typeToCheck === type && typeof num !== "number";

  // error checks
  if (isInvalidNum("counter/increment", incrementBy)) {
    console.log("Invalid incrementBy value, must be a valid number");
    return;
  }

  if (isInvalidNum("counter/decrement", decrementBy)) {
    console.log("Invalid incrementBy value, must be a valid number");
    return;
  }

  if (isInvalidNum("counter/set", count)) {
    console.log("Invalid count value, must be a valid number");
    return;
  }

  switch (type) {
    case "counter/increment":
      return { count: state.count + incrementBy };
    case "counter/decrement":
      return { count: state.count - decrementBy };
    case "counter/reset":
      return { count: 0 };
    case "counter/set":
      return { count: count || state.count };
    default:
      return state;
  }
}

store.subscribe(() => {
  console.log(store.getState());
});

// Action generators
const incrementBy = ({ incrementBy = 1 } = {}) => ({
  type: "counter/increment",
  incrementBy: incrementBy,
});

const decrementBy = ({ decrementBy = 1 } = {}) => ({
  type: "counter/decrement",
  decrementBy: decrementBy,
});

const setCount = ({ count } = {}) => ({
  type: "counter/set",
  count: count,
});

const reset = () => ({ type: "counter/reset" });

store.dispatch(incrementBy({ incrementBy: 4 }));
store.dispatch(incrementBy());
store.dispatch(decrementBy());
store.dispatch(setCount({ count: 50 }));
store.dispatch(reset());
