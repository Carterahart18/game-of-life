import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Canvas from '../../components/canvas';

import { drawGeneration, getCoordinates } from '../../util/canvasUtil';

const propTypes = {
  currentGeneration: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.bool)),
  setPixel: PropTypes.func.isRequired
};

export default function Board(props) {
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    drawGeneration(props.currentGeneration);
  }, [props.currentGeneration]);

  const onMouseDown = event => {
    setDrawing(true);
    const [i, j] = getCoordinates(event);
    props.setPixel(i, j, true);
  };

  const onMouseMove = event => {
    if (drawing) {
      const [i, j] = getCoordinates(event);
      props.setPixel(i, j, true);
    }
  };

  const onMouseUp = event => {
    setDrawing(false);
  };

  return (
    <div className={'Board-container'}>
      <Canvas
        height={500}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        scale={1}
        width={500}
      />
    </div>
  );
}

Board.propTypes = propTypes;
