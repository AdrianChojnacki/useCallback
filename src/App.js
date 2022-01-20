import React, { useMemo, useState } from 'react';

import Counter from './Counter';

import './App.css';

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const [state, setState] = useState({x: 0, y: 0});

  const increaseFirstCounter = () =>
    setFirstCounter(firstCounter + 1);

  const increaseSecondCounter = () =>
    setSecondCounter(secondCounter + 1);

  // const firstCounterComponent = useMemo(() =>
  //   <Counter counter={firstCounter} index={1} />, [firstCounter]
  // );

  const increaseX = () => setState({...state, x: state.x + 1});
  const increaseY = () => setState({...state, y: state.y + 1});

  return (
    <div>
      <p>Licznik nr 1 wynosi: {state.x}</p>
      <p>Licznik nr 2 wynosi: {state.y}</p>
      {/* {firstCounterComponent} */}
      <Counter counter={state.x} index={1} />
      <Counter counter={state.y} index={2} />
      <button onClick={increaseX}>
        Zwiększ licznik nr 1
      </button>
      <button onClick={increaseY}>
        Zwiększ licznik nr 2
      </button>
    </div>
  );
}

export default App;
