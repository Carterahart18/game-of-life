import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
// import { configure, shallow } from 'enzyme';

import { countNeighbors } from '../util';

// import App from '../main';

describe('NeighborCounter', function() {
  let grid = [[]];

  it('Counts neighbors exactly', () => {
    grid = [[0, 1, 0], [0, 0, 0], [0, 0, 0]];
    let countOne = countNeighbors(grid, 1, 1);
    grid = [[0, 1, 0], [1, 0, 0], [0, 0, 0]];
    let countTwo = countNeighbors(grid, 1, 1);
    grid = [[1, 0, 1], [1, 0, 1], [1, 0, 1]];
    let countThree = countNeighbors(grid, 1, 1);

    expect(countOne).toBe(1);
    expect(countTwo).toBe(2);
    expect(countThree).toBe(6);
  });
});
