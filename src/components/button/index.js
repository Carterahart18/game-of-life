import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default function Button(props) {
  return (
    <button
      id={props.id}
      disabled={props.disabled}
      className={'button'}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = propTypes;
