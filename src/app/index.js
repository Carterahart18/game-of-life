import React from 'react';

import Header from '../components/header';
import Canvas from '../components/canvas';
import Row from '../components/row';
import Button from '../components/button';
import ControlPanel from '../containers/controlPanel';

import {
  countNeighbors,
  generateRandomGrid,
  getNextGeneration
} from '../util/boardUtil';
import { drawGrid } from '../util/canvasUtil';

import { WIDTH, HEIGHT } from '../util/constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let grid = [[]];
    for (let i = 0; i < WIDTH; i++) {
      for (let j = 0; j < HEIGHT; j++) {
        if (!grid[i]) {
          grid[i] = [];
        }
        grid[i][j] = false;
      }
    }

    this.state = {
      grid: grid,
      interval: null,
      running: false
    };
  }

  stepBoard = () => {
    let newGrid = getNextGeneration(this.state.grid);
    this.setState({ grid: newGrid });
    drawGrid(newGrid);
  };

  start = () => {
    const interval = setInterval(() => {
      this.stepBoard();
    }, 50);

    this.setState({ interval: interval, running: true });
  };

  stop = () => {
    clearInterval(this.state.interval);
    this.setState({ running: false });
  };

  toggleRunningState = () => {
    const callback = this.state.running ? this.stop : this.start;
    callback();
  };

  randomize = () => {
    let grid = generateRandomGrid();
    this.setState({ grid });
    drawGrid(grid);
  };

  // randomButton.addEventListener('click', function() {
  //   grid = generateRandomGrid();
  //   drawGrid(grid);
  // // });

  // canvas.addEventListener('click', function(event) {
  //   let x = event.pageX - canvas.offsetLeft;
  //   let y = event.pageY - canvas.offsetTop;

  //   const xPos = Math.floor(x / SCALE);
  //   const yPos = Math.floor(y / SCALE);
  //   if (!grid[xPos]) {
  //     grid[xPos] = [];
  //   }

  //   if (isPixelSet(canvas, xPos, yPos)) {
  //     clearPixel(canvas, xPos, yPos);
  //     grid[xPos][yPos] = false;
  //   } else {
  //     drawPixel(canvas, xPos, yPos);
  //     grid[xPos][yPos] = true;
  //   }
  // });

  render() {
    const { running } = this.state;
    return (
      <div>
        <Header text={"Convey's Game of Life"} />
        <Row>
          <ControlPanel
            running={running}
            onToggle={this.toggleRunningState}
            onStep={this.stepBoard}
            onRandomize={this.randomize}
          />
          <Canvas width={500} height={500} scale={1} />
        </Row>
      </div>
    );
  }
}
