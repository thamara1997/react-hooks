import React from "react";
import { useState } from "react";

const UseState = () => {
  const [details, setDetails] = useState({ name: "Manula", count: 0 });

  const increaseCounter = () => {
    setDetails((prev) => {
      return { ...prev, count: prev.count + 1 };
    });
  };

  const handleName = (e) => {
    const newName = e.target.value;
    setDetails((prev) => ({ ...prev, name: newName }));
  };

  return (
    <div>
      <input type="text" onChange={handleName} />
      <h1>
        {details.name} has clicked {details.count} times!
      </h1>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  );
};

export default UseState;
