import React, { useState } from 'react';
import {
  getEmptyGeneration,
  getRandomGeneration,
  getNextGeneration,
  setPixel
} from '../util/generationUtil';

import Board from '../containers/Board';
import ControlPanel from '../containers/controlPanel';
import Header from '../components/header';
import Row from '../components/row';

export default function App() {
  // constructor(props) {
  //   super(props);
  //   state = {
  //     currentGeneration: getEmptyGeneration(),
  //     interval: null,
  //     running: false
  //   };
  // }

  const [currentGeneration, setCurrentGeneration] = useState(
    getEmptyGeneration()
  );
  const [gameInterval, setGameInterval] = useState(null);
  const [running, setRunning] = useState(false);

  const stepBoard = () => {
    // debugger;
    // const nextGen = getNextGeneration(currentGeneration);
    setCurrentGeneration(currentGeneration =>
      getNextGeneration(currentGeneration)
    );
    setRunning(false);

    // setState(state => ({
    //   currentGeneration: getNextGeneration(state.currentGeneration)
    // }));
  };

  const setPixel = (i, j, value) => {
    setCurrentGeneration(setPixel(currentGeneration, i, j, value));
    // setState({
    //   currentGeneration: setPixel(state.currentGeneration, i, j, value)
    // });
  };

  const startGame = () => {
    const interval = setInterval(() => {
      stepBoard();
    }, 50);
    setGameInterval(interval);
    setRunning(true);

    // setState({ interval: interval, running: true });
  };

  const stopGame = () => {
    debugger;
    clearInterval(gameInterval);
    setRunning(false);

    // setState({ running: false });
  };

  const toggleGame = () => {
    running ? stopGame() : startGame();
  };

  const randomize = () => {
    setCurrentGeneration(getRandomGeneration());
    // setState({ currentGeneration: getRandomGeneration() });
  };

  const clearBoard = () => {
    stopGame();
    setCurrentGeneration(getEmptyGeneration());
    // setState({ currentGeneration: getEmptyGeneration() });
  };

  return (
    <div>
      <Header text={"Convey's Game of Life"} />
      <Row>
        <ControlPanel
          running={running}
          onClear={clearBoard}
          onStep={stepBoard}
          onRandomize={randomize}
          onToggle={toggleGame}
        />
        <Board currentGeneration={currentGeneration} setPixel={setPixel} />
      </Row>
    </div>
  );
}
