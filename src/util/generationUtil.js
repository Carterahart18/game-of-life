import { WIDTH, HEIGHT } from './constants';

import { getPrefab } from './prefabUtil';

export const getEmptyGeneration = () => {
  let generation = [[]];
  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      if (!generation[i]) {
        generation[i] = [];
      }
      generation[i][j] = false;
    }
  }
  return generation;
};

export const getRandomGeneration = () => {
  let generation = [[]];

  for (let i = 0; i < WIDTH; i++) {
    for (let j = 0; j < HEIGHT; j++) {
      if (!generation[i]) {
        generation[i] = [];
      }
      generation[i][j] = Math.random() * 100 > 50;
    }
  }

  return generation;
};

export const countNeighbors = (generation, i, j) => {
  let num = 0;

  if (generation[i - 1]) {
    if (generation[i - 1][j - 1]) num++;
    if (generation[i - 1][j]) num++;
    if (generation[i - 1][j + 1]) num++;
  }
  if (generation[i][j - 1]) num++;
  if (generation[i][j + 1]) num++;
  if (generation[i + 1]) {
    if (generation[i + 1][j - 1]) num++;
    if (generation[i + 1][j]) num++;
    if (generation[i + 1][j + 1]) num++;
  }

  return num;
};

export const getNextGeneration = generation => {
  let newGeneration = [[]];
  generation.forEach(function(col, i) {
    col.forEach(function(bool, j) {
      const neighbors = countNeighbors(generation, i, j);

      if (!newGeneration[i]) {
        newGeneration[i] = [];
      }

      if (neighbors <= 1) {
        newGeneration[i][j] = false;
      } else if (neighbors === 2) {
        newGeneration[i][j] = generation[i][j];
      } else if (neighbors === 3) {
        newGeneration[i][j] = true;
      } else if (neighbors >= 4) {
        newGeneration[i][j] = false;
      }
    });
  });
  return newGeneration;
};

export const cloneGeneration = generation => {
  let newGeneration = [[]];
  generation.forEach(function(col, i) {
    col.forEach(function(bool, j) {
      if (!newGeneration[i]) {
        newGeneration[i] = [];
      }
      newGeneration[i][j] = generation[i][j];
    });
  });
  return newGeneration;
};

export const setPixel = (generation, i, j, value) => {
  let newGeneration = cloneGeneration(generation);
  if (!newGeneration[i]) {
    newGeneration[i] = [];
  }
  newGeneration[i][j] = value;
  return newGeneration;
};

export const setPrefab = (generation, i, j, prefabEnum) => {
  let prefab = getPrefab(prefabEnum);
  let newGeneration = cloneGeneration(generation);
  for (let a = 0; a < prefab.length; a++) {
    for (let b = 0; b < prefab[a].length; b++) {
      let x = b + i;
      let y = a + j;
      if (!newGeneration[x]) {
        newGeneration[x] = [];
      }
      newGeneration[x][y] = prefab[a][b];
    }
  }
  return newGeneration;
};
