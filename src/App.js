import React, { useState } from 'react';

import Counter from './Counter';

import './App.css';

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = () =>
    setFirstCounter(firstCounter + 1);

  const increaseSecondCounter = () =>
    setSecondCounter(secondCounter + 1);

  return (
    <div>
      <p>Licznik nr 1 wynosi: {firstCounter}</p>
      <p>Licznik nr 2 wynosi: {secondCounter}</p>
      <Counter />
      <button onClick={increaseFirstCounter}>
        Zwiększ licznik nr 1
      </button>
      <button onClick={increaseSecondCounter}>
        Zwiększ licznik nr 2
      </button>
    </div>
  );
}

export default App;
