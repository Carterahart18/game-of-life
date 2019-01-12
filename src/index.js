import registerServiceWorker from './registerServiceWorker';
import { Exception } from 'handlebars';
import {
  countNeighbors,
  drawGrid,
  generateRandomGrid,
  isPixelSet,
  clearPixel,
  drawPixel
} from './util';

export const WIDTH = 100;
export const HEIGHT = 100;
export const SCALE = 5;

const randomButton = document.getElementById('random');
const toggleButton = document.getElementById('toggle');
const canvas = document.getElementById('canvas');
let grid = [[]];
for (let i = 0; i < WIDTH; i++) {
  for (let j = 0; j < HEIGHT; j++) {
    if (!grid[i]) {
      grid[i] = [];
    }
    grid[i][j] = false;
  }
}

let interval;

const start = () => {
  toggleButton.setAttribute('value', 'Stop');
  interval = setInterval(function() {
    let newGrid = [[]];
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

    grid = newGrid;
    drawGrid(newGrid, canvas);
  }, 50);
};

const stop = () => {
  toggleButton.setAttribute('value', 'Start');
  clearInterval(interval);
};

toggleButton.addEventListener('click', function() {
  switch (toggleButton.getAttribute('value')) {
    case 'Start':
      start();
      break;
    case 'Stop':
      stop();
      break;
    default:
      throw new Exception('Unexpected button state');
  }
});

randomButton.addEventListener('click', function() {
  grid = generateRandomGrid();
  drawGrid(grid, canvas);
});

canvas.addEventListener('click', function(event) {
  let x = event.pageX - canvas.offsetLeft;
  let y = event.pageY - canvas.offsetTop;

  const xPos = Math.floor(x / SCALE);
  const yPos = Math.floor(y / SCALE);
  if (!grid[xPos]) {
    grid[xPos] = [];
  }

  if (isPixelSet(canvas, xPos, yPos)) {
    clearPixel(canvas, xPos, yPos);
    grid[xPos][yPos] = false;
  } else {
    drawPixel(canvas, xPos, yPos);
    grid[xPos][yPos] = true;
  }
});

registerServiceWorker();
