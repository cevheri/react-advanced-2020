import React from 'react';

const ErrorExample = () => {

  let title = "random title";
  const handleClick=()=>{
    title="new title value";
    console.log(title);
  }
  return (
    <React.Fragment>
      <h2>
        {title}
      </h2>
      <button type="button" onClick={handleClick} className="btn">change title</button>
    </React.Fragment>
  );
};

export default ErrorExample;
