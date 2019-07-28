// Canvas utility

import { SCALE } from './constants';

export const drawGeneration = generation => {
  const canvas = document.getElementById('canvas');
  generation.forEach(function(col, i) {
    col.forEach(function(bool, j) {
      if (generation[i][j]) {
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

export const getCoordinates = event => {
  const canvas = document.getElementById('canvas');

  let x = event.pageX - canvas.offsetLeft;
  let y = event.pageY - canvas.offsetTop;

  const xPos = Math.floor(x / SCALE);
  const yPos = Math.floor(y / SCALE);
  return [xPos, yPos];
};

export const drawPrefab = (i, j, event) => {

}
