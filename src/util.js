// Canvas utility

import { WIDTH, HEIGHT, SCALE } from './index';

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

export const drawGrid = (grid, canvas) => {
  grid.forEach(function(col, i) {
    col.forEach(function(bool, j) {
      if (grid[i][j]) {
        drawPixel(canvas, i, j, SCALE);
      } else {
        clearPixel(canvas, i, j, SCALE);
      }
    });
  });
};

export const drawPixel = (canvas, x, y) => {
  canvas.getContext('2d').fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
};

export const clearPixel = (canvas, x, y) => {
  canvas.getContext('2d').clearRect(x * SCALE, y * SCALE, SCALE, SCALE);
};

export const isPixelSet = (canvas, x, y) => {
  var image = canvas.getContext('2d').getImageData(x, y, 1, 1);
  if (image) {
    return image.data && image.data[3] !== 0 ? true : false;
  }
};

// export const togglePixel = (canvas, x, y) => {
//   const context = canvas.getContext('2d');
//   var image = context.getImageData(x, y, 1, 1);
//   if (image) {
//     const xPos = Math.floor(x / SCALE);
//     const yPos = Math.floor(y / SCALE);

//     if (image.data && image.data[3] != 0) {
//       context.clearRect(xPos * SCALE, yPos * SCALE, SCALE, SCALE);
//     } else {
//       context.fillRect(xPos * SCALE, yPos * SCALE, SCALE, SCALE);
//     }
//     console.log(image);
//   }
// };
// };
