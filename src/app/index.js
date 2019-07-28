import React from 'react';
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGeneration: getEmptyGeneration(),
      interval: null,
      running: false
    };
  }

  stepBoard = () => {
    this.setState(state => ({
      currentGeneration: getNextGeneration(state.currentGeneration)
    }));
  };

  setPixel = (i, j, value) => {
    this.setState({
      currentGeneration: setPixel(this.state.currentGeneration, i, j, value)
    });
  };

  startGame = () => {
    const interval = setInterval(() => {
      this.stepBoard();
    }, 50);

    this.setState({ interval: interval, running: true });
  };

  stopGame = () => {
    clearInterval(this.state.interval);
    this.setState({ running: false });
  };

  toggleGame = () => {
    this.state.running ? this.stopGame() : this.startGame();
  };

  randomize = () => {
    this.setState({ currentGeneration: getRandomGeneration() });
  };

  clearBoard = () => {
    this.setState({ currentGeneration: getEmptyGeneration(), running: false });
  };

  render() {
    const { currentGeneration, running } = this.state;
    return (
      <div>
        <Header text={"Convey's Game of Life"} />
        <Row>
          <ControlPanel
            running={running}
            onClear={this.clearBoard}
            onStep={this.stepBoard}
            onRandomize={this.randomize}
            onToggle={this.toggleGame}
          />
          <Board
            currentGeneration={currentGeneration}
            setPixel={this.setPixel}
          />
        </Row>
      </div>
    );
  }
}
