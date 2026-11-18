import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [count, setCount] = useState(0);

  // 1. Runs ONCE when component loads (mounts)
  useEffect(() => {
    console.log('Component mounted!');
  }, []); // Empty array [] = runs once

  // 2. Runs whenever `count` changes
  useEffect(() => {
    // Side effect: update the browser tab title
    document.title = `Count: ${count}`;
    console.log(`Count changed to: ${count}`);
  }, [count]); // [count] = runs on mount + whenever count updates

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    setCount(prev => prev - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>This is a dummy counter</p>

      <h2>Count: {count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Navbar;
