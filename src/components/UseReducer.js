import React, { useReducer } from "react";

// Step 1: Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("Unknown action type");
  }
};

function UseReducer() {
  // Step 2: Initialize useReducer
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      {/* Step 3: Dispatch actions */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducer;
