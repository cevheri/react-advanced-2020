import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  //console.log(useState("random title"));
  // const val = useState("random title")[0];
  // const valEvent = useState("random title")[1];
  // console.log(val);
  // console.log(valEvent);

  const clickHandler = () => {
    if (text === "random title") {
      setText("hello react");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
