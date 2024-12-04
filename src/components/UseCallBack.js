import React, { useState, useCallback } from "react";
import PrintTable from "./subComponents/PrintTable";

const UseCallBack = () => {
  const [number, setNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  // Corrected CSS styling
  const cssStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black", // Ensure readable text on dark background
    padding: "20px",
    minHeight: "100vh",
  };

  // Using useCallback to memoize the table calculation function
  const calculateTable = useCallback(() => {
    return Array.from({ length: 5 }, (_, i) => number * (i + 1));
  }, [number]);

  return (
    <div style={cssStyles}>
      <label htmlFor="numberInput">Enter a number:</label>
      <input
        id="numberInput"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.valueAsNumber)} // Corrected onChange spelling
        style={{ margin: "10px", padding: "5px" }}
      />
      <button
        onClick={() => setDarkTheme(!darkTheme)}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
      <PrintTable calculateTable={calculateTable} />
    </div>
  );
};

export default UseCallBack;
