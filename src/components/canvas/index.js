import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  height: PropTypes.number.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
  scale: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default function Canvas(props) {
  return (
    <canvas
      className={'Canvas'}
      height={props.height}
      id={'canvas'}
      onMouseDown={props.onMouseDown}
      onMouseMove={props.onMouseMove}
      onMouseUp={props.onMouseUp}
      scale={props.scale}
      width={props.width}
    />
  );
}

Canvas.propTypes = propTypes;
