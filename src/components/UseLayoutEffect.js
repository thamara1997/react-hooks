import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffect = () => {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  // Example with useEffect
  //   useEffect(() => {
  //     if (textRef.current) {
  //       // Get dimensions of the element
  //       const dimentions = textRef.current.getBoundingClientRect();
  //       textRef.current.style.paddingTop = `${dimentions.height}px`;
  //     }
  //   }, [toggle]);

  //Example with useLayoutEffect
  useLayoutEffect(() => {
    if (textRef.current) {
      const dimentions = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimentions.height}px`;
    }
  }, [toggle]);

  return (
    <div>
      <h2>Toggled : {toggle ? "On" : "Off"}</h2>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {/* Attach the ref to this element */}
      <h1 ref={textRef}>This is a toggled element</h1>
    </div>
  );
};

export default UseLayoutEffect;
