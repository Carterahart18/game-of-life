// Canvas utility

export const generateRandomGrid = (width, height) => {
  let grid = [[]];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
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
        drawPixel(canvas, i, j, 2);
      } else {
        clearPixel(canvas, i, j, 2);
      }
    });
  });
};

export const drawPixel = (canvas, x, y, scale) => {
  canvas.getContext('2d').fillRect(x * scale, y * scale, scale, scale);
};

export const clearPixel = (canvas, x, y, scale) => {
  canvas.getContext('2d').clearRect(x * scale, y * scale, scale, scale);
};
