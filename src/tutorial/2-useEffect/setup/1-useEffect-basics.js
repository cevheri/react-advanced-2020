import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  console.log("use effect basic function");
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log(value);
    if (value >= 1) {
      document.title = `Value is : ${value}`;
    }
  });

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
