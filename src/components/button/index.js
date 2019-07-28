import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default function Button(props) {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

Button.propTypes = propTypes;
