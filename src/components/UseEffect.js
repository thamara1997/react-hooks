import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  //   useEffect(() => {
  //     document.title = `You clicked ${count} times`;
  //   });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  useEffect(() => {
    document.title = `You clicked ${otherCount} times`;
  }, [otherCount]);

  useEffect(() => {
    console.log("Run Use Effect", count);
    return () => {
      console.log("Clean up", count);
    };
  }, [count]);

  //Cleanup is essential when your effect involves operations like:

  // Setting up timers or intervals.
  // Subscribing to WebSocket or API events.
  // Listening to browser events like scroll or resize.

  return (
    <div>
      <h3>{count} new Messages!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h3>{otherCount} new Messages!</h3>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increase</button>
    </div>
  );
};

export default UseEffect;
