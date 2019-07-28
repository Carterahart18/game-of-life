import React, { useState } from 'react';
import {
  getEmptyGeneration,
  getRandomGeneration,
  getNextGeneration,
  setPixel,
  setPrefab
} from '../util/generationUtil';
import { PREFABS } from '../util/prefabUtil';

import Board from '../containers/Board';
import ControlPanel from '../containers/controlPanel';
import Header from '../components/header';
import Row from '../components/row';

import './styles.css';

export default function App() {
  const [currentGeneration, setCurrentGeneration] = useState(
    getEmptyGeneration()
  );
  const [gameInterval, setGameInterval] = useState(null);
  const [running, setRunning] = useState(false);
  const [activePrefab, setActivePrefab] = useState(PREFABS.GLIDER);
  const [drawingPrefab, setDrawingPrefab] = useState(false);

  const stepBoard = () => {
    setCurrentGeneration(currentGeneration =>
      getNextGeneration(currentGeneration)
    );
  };

  const modifyBoard = (i, j, value) => {
    setCurrentGeneration(setPixel(currentGeneration, i, j, value));
    // insertPrefab(i, j, null);
  };

  const insertPrefab = (i, j, prefab) => {
    setCurrentGeneration(setPrefab(currentGeneration, i, j, prefab));
  };

  const startGame = () => {
    const interval = setInterval(() => {
      stepBoard();
    }, 50);
    setGameInterval(interval);
    setRunning(true);
  };

  const stopGame = () => {
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
    <div className={'App-container'}>
      <Header text={'Conways Game of Life'} />
      <div className={'App-main'}>
        <ControlPanel
          activePrefab={activePrefab}
          drawingPrefab={drawingPrefab}
          onClear={clearBoard}
          onRandomize={randomize}
          onStep={stepBoard}
          onToggle={toggleGame}
          running={running}
          setActivePrefab={setActivePrefab}
          setDrawingPrefab={setDrawingPrefab}
        />
        <Board
          activePrefab={activePrefab}
          currentGeneration={currentGeneration}
          drawingPrefab={drawingPrefab}
          insertPrefab={insertPrefab}
          modifyBoard={modifyBoard}
        />
      </div>
    </div>
  );
}
