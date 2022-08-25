import { createContext, useReducer } from "react";

const initialState = {
  budget: 20000,
  expenses: [
    { id: 12, name: "shopping", cost: 500 },
    { id: 13, name: "holiday", cost: 10000 },
    { id: 12, name: "car service", cost: 3000 },
  ],
};

export const AppContext = createContext();

const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
