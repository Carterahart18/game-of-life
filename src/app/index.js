import React from 'react';

import Header from '../components/header';
import Canvas from '../components/canvas';
import Row from '../components/row';
import Button from '../components/button';

import {
  countNeighbors,
  drawGrid,
  generateRandomGrid,
  isPixelSet,
  clearPixel,
  drawPixel
} from '../util/canvasUtil';

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

  start = () => {
    // toggleButton.setAttribute('value', 'Stop');
    const interval = setInterval(() => {
      let newGrid = [[]];
      const { grid } = this.state;
      grid.forEach(function(col, i) {
        col.forEach(function(bool, j) {
          const neighbors = countNeighbors(grid, i, j);

          if (!newGrid[i]) {
            newGrid[i] = [];
          }

          if (neighbors <= 1) {
            newGrid[i][j] = false;
          } else if (neighbors === 2) {
            newGrid[i][j] = grid[i][j];
          } else if (neighbors === 3) {
            newGrid[i][j] = true;
          } else if (neighbors >= 4) {
            newGrid[i][j] = false;
          }
        });
      });

      this.setState({ grid: newGrid });
      drawGrid(newGrid);
    }, 50);

    this.setState({ interval: interval, running: true });
  };

  stop = () => {
    // toggleButton.setAttribute('value', 'Start');
    clearInterval(this.state.interval);
    this.setState({ running: false });
  };

  onToggle = () => {
    const callback = this.state.running ? this.stop : this.start;
    callback();
  };

  // toggleButton.addEventListener('click', function() {

  // });

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
        <Canvas width={500} height={500} scale={1} />
        <Row>
          <Button
            id={'toggle'}
            onClick={this.onToggle}
            text={running ? 'Stop' : 'Start'}
          />
          <Button id={'random'} onClick={this.randomize} text={'Randomize'} />
        </Row>
      </div>
    );
  }
}
