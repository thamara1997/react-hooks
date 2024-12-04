import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Correct use of useMemo
  const memoCalculations = useMemo(() => {
    return expensiveFunction(number); // Call expensiveFunction
  }, [number]); // Recalculate only when 'number' changes

  // Fixed CSS styles
  const cssStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black", // Ensure text is readable on a dark background
  };

  return (
    <div style={cssStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber || 0)} // Use `valueAsNumber` safely
      />
      <h1>Calculations: {memoCalculations}</h1>
      <button onClick={() => setDark(!dark)}>Toggle</button>{" "}
      {/* Correct state setter */}
    </div>
  );
};

// Simulated expensive function
function expensiveFunction(num) {
  console.log("Computing...");
  for (let i = 0; i < 10000000; i++) {
    // Simulate expensive computation
  }
  return num;
}

export default UseMemo;
