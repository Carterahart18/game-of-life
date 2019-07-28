// Canvas utility

import { SCALE } from './constants';

export const drawGrid = (grid) => {
  const canvas = document.getElementById('canvas');
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
