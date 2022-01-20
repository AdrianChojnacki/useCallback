import React, { memo } from 'react';

const Counter = () => {
  console.log('render');

  return (
    <div>
      Komponent nigdy się nie zmienia!
    </div>
  )
}

export default memo(Counter);