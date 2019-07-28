import { WIDTH, HEIGHT } from './constants';

export const generateRandomGrid = () => {
  let grid = [[]];

  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      if (!grid[i]) {
        grid[i] = [];
      }
      grid[i][j] = Math.random() * 100 > 50;
    }
  }

  return grid;
};

export const countNeighbors = (grid, i, j) => {
  let num = 0;

  if (grid[i - 1]) {
    if (grid[i - 1][j - 1]) num++;
    if (grid[i - 1][j]) num++;
    if (grid[i - 1][j + 1]) num++;
  }
  if (grid[i][j - 1]) num++;
  if (grid[i][j + 1]) num++;
  if (grid[i + 1]) {
    if (grid[i + 1][j - 1]) num++;
    if (grid[i + 1][j]) num++;
    if (grid[i + 1][j + 1]) num++;
  }

  return num;
};

export const getNextGeneration = grid => {
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
  return newGrid;
};
