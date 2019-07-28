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
  const [currentGeneration, setCurrentGeneration] = useState(
    getEmptyGeneration()
  );
  const [gameInterval, setGameInterval] = useState(null);
  const [running, setRunning] = useState(false);
  const drawPrefab = useState(false);

  const stepBoard = () => {
    setCurrentGeneration(currentGeneration =>
      getNextGeneration(currentGeneration)
    );
  };

  const modifyBoard = (i, j, value) => {
    setCurrentGeneration(setPixel(currentGeneration, i, j, value));
  };

  const startGame = () => {
    const interval = setInterval(() => {
      stepBoard();
    }, 50);
    setGameInterval(interval);
    setRunning(true);
  };

  const stopGame = () => {
    debugger;
    clearInterval(gameInterval);
    setRunning(false);
  };

  const toggleGame = () => {
    running ? stopGame() : startGame();
  };

  const randomize = () => {
    setCurrentGeneration(getRandomGeneration());
  };

  const clearBoard = () => {
    stopGame();
    setCurrentGeneration(getEmptyGeneration());
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
        <Board
          currentGeneration={currentGeneration}
          modifyBoard={modifyBoard}
        />
      </Row>
    </div>
  );
}
