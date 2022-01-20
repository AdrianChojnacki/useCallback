import React, { useCallback, useState } from 'react';

import Counter from './Counter';

import './App.css';

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = useCallback(
    () => setFirstCounter(firstCounter + 1), [firstCounter]
  );

  const increaseSecondCounter = useCallback(
    () => setSecondCounter(prevValue => prevValue + 1), []
  );

  return (
    <div>
      <p>Licznik nr 1 wynosi: {firstCounter}</p>
      <p>Licznik nr 2 wynosi: {secondCounter}</p>
      <Counter callback={increaseFirstCounter} index={1} />
      <Counter callback={increaseSecondCounter} index={2} />
    </div>
  );
}

export default App;
