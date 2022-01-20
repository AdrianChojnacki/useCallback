import React, { useMemo, useState } from 'react';

import Counter from './Counter';

import './App.css';

const App = () => {
  const [state, setState] = useState({x: 0, y: 0});

  const increaseX = () => setState({...state, x: state.x + 1});
  const increaseY = () => setState({...state, y: state.y + 1});

  const firstCounterComponent = useMemo(() =>
    <Counter counter={state.x} index={1} />, [state.x]
  );

  const secondCounterComponent = useMemo(() =>
    <Counter counter={state.y} index={2} />, [state.y]
  );

  return (
    <div>
      <p>Licznik nr 1 wynosi: {state.x}</p>
      <p>Licznik nr 2 wynosi: {state.y}</p>
      {/* <Counter counter={state.x} index={1} /> */}
      {/* <Counter counter={state.y} index={2} /> */}
      {firstCounterComponent}
      {secondCounterComponent}
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
