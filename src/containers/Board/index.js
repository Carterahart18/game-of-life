import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Canvas from '../../components/canvas';
import Column from '../../components/column';

import {
  drawGeneration,
  getCoordinates
} from '../../util/canvasUtil';

const propTypes = {
  activePrefab: PropTypes.string.isRequired,
  currentGeneration: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
  drawingPrefab: PropTypes.bool.isRequired,
  insertPrefab: PropTypes.func.isRequired,
  modifyBoard: PropTypes.func.isRequired
};

export default function Board(props) {
  const {
    activePrefab,
    currentGeneration,
    drawingPrefab,
    insertPrefab,
    modifyBoard
  } = props;
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    drawGeneration(currentGeneration);
  }, [props.currentGeneration]);

  const onMouseDown = event => {
    if (!drawingPrefab) {
      setDrawing(true);
      const [i, j] = getCoordinates(event);
      modifyBoard(i, j, true);
    }
  };

  const onMouseMove = event => {
    if (drawing && !drawingPrefab) {
      const [i, j] = getCoordinates(event);
      modifyBoard(i, j, true);
    }
  };

  const onMouseUp = event => {
    setDrawing(false);
    if (drawingPrefab) {
      const [i, j] = getCoordinates(event);
      insertPrefab(i, j, activePrefab);
    }
  };

  return (
    <Column className={'Board-container'}>
      <Canvas
        height={500}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        scale={1}
        width={500}
      />
    </Column>
  );
}

Board.propTypes = propTypes;
