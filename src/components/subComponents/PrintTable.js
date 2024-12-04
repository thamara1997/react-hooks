import React, { useState, useEffect } from "react";

const PrintTable = ({ calculateTable }) => {
  const [rows, setRows] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    console.log("Print table runs");
    setRows(calculateTable());
  }, [calculateTable]);

  return rows.map((row, index) => {
    return <p key={index}>{row}</p>;
  });
};

export default PrintTable;
