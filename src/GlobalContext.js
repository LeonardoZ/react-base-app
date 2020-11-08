import { useReducer, createContext } from "react";

export const GlobalContext = createContext();

const initialState = {
  counter: {
    value: 0,
  },
};

export const actions = {
  INCREASE_COUNTER: "INCREASE_COUNTER",
  DECREASE_COUNTER: "DECREASE_COUNTER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.INCREASE_COUNTER:
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload.value,
        },
      };
    case actions.DECREASE_COUNTER:
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload.value,
        },
      };
    default:
      throw new Error(`Invalid action ${action.type}`);
  }
};

export const GlobalContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
