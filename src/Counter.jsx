import React from 'react';

const Counter = ({ callback, index }) => {
  console.log(`Render licznika nr ${index}`);

  return (
    <div>
      <button onClick={callback}>Zwiększ licznik {index}</button>
    </div>
  )
}

export default Counter;