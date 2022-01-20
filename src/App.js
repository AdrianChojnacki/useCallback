import React, { useCallback, useState } from 'react';

import Counter from './Counter';

import './App.css';

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = useCallback(
    () => setFirstCounter(prevValue => prevValue + 1), []
  );

  const increaseSecondCounter = useCallback(
    () => setSecondCounter(prevValue => prevValue + 1), []
  );

  const firstCounterComponent = <Counter callback={increaseFirstCounter} index={1} />

  const secondCounterComponent = <Counter callback={increaseSecondCounter} index={2} />

  return (
    <div>
      <p>Licznik nr 1 wynosi: {firstCounter}</p>
      <p>Licznik nr 2 wynosi: {secondCounter}</p>
      {firstCounterComponent}
      {secondCounterComponent}
    </div>
  );
}

export default App;
