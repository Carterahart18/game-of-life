import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  height: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default function Canvas(props) {
  return (
    <canvas
      id={'canvas'}
      className={'Canvas'}
      width={props.width}
      height={props.height}
      scale={props.scale}
    />
  );
}

Canvas.propTypes = propTypes;
