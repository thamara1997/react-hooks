import React, { useRef } from "react";

const UseRef = () => {
  const inputEle = useRef();
  const handleClick = () => {
    //this return the element
    console.log(inputEle.current);
    //this return the current data and can see what are the function it's applicable
    console.log(inputEle);

    inputEle.current.style.width = "300px";
    inputEle.current.focus();
    //when we click it's make the input field 300px width and focus
  };

  return (
    <div>
      <input type="text" ref={inputEle} />
      <button onClick={handleClick}>Click Me to Expand</button>
    </div>
  );
};

export default UseRef;
