import React, { memo } from 'react';

const Counter = ({ counter, index }) => {
  console.log(`Render licznika nr ${index}`);

  return (
    <div>
      <p>Licznik nr {index} wynosi: {counter}</p>
    </div>
  )
}

// export default memo(Counter);
export default Counter;