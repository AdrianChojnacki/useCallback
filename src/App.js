import React, { useState } from 'react';

import Counter from './Counter';

import './App.css';

const App = () => {
  // const [state, setState] = useState({x: 0, y: 0});
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  // const increaseX = () => setState({...state, x: state.x + 1});
  // const increaseY = () => setState({...state, y: state.y + 1});

  const increaseFirstCounter = () =>
    setFirstCounter(firstCounter + 1);

  const increaseSecondCounter = () =>
    setSecondCounter(secondCounter + 1);

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
