import registerServiceWorker from './registerServiceWorker';
import { Exception } from 'handlebars';
import { countNeighbors, drawGrid, generateRandomGrid } from './util';

const randomButton = document.getElementById('random');
const toggleButton = document.getElementById('toggle');
const canvas = document.getElementById('canvas');
let grid = [[]];
let interval;

const start = () => {
  const canvas = document.getElementById('canvas');
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

    console.log('Draw');

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
      toggleButton.setAttribute('value', 'Stop');
      start();
      break;
    case 'Stop':
      toggleButton.setAttribute('value', 'Start');
      clearInterval(interval);
      break;
    default:
      throw new Exception('Unexpected button state');
  }
});

randomButton.addEventListener('click', function() {
  const canvas = document.getElementById('canvas');
  grid = generateRandomGrid(250, 250);
  drawGrid(grid, canvas);
});

registerServiceWorker();
