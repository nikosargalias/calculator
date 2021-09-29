import { createStore, combineReducers } from "redux";

const expensesReducerDefaultState = [];

const expensesReducer = (
  state = expensesReducerDefaultState,
  { type, expense = {}, id }
) => {
  switch (type) {
    case "ADD_EXPENSE":
      return [...state, expense];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== id);
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

// helper function
const generateRandomId = (function () {
  const randomIDs = new Set();

  return function genRandomID() {
    const randomID = Math.random() * 1000000000;

    if (randomIDs.has(randomID)) {
      return genRandomID();
    }

    randomIDs.add(randomID);
    return randomID;
  };
})();
// Action Generators
const addExpense = ({ description = "", note = "", amount = 0 } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: generateRandomId(),
    description,
    note,
    amount,
    createdAt: new Date(),
  },
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id: id,
});

const expenseOne = store.dispatch(addExpense());
store.dispatch(addExpense());
store.dispatch(addExpense());
store.dispatch(removeExpense({ id: expenseOne.expense.id }));
