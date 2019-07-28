import React from 'react';
import PropTypes from 'prop-types';

import { classNamePrefixer } from '../../util/classNameUtil';

import './styles.css';

const getClassName = classNamePrefixer('button');

const propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  inline: PropTypes.bool,
  transparent: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default function Button(props) {
  return (
    <button
      id={props.id}
      disabled={props.disabled}
      className={getClassName({
        inline: props.inline,
        transparent: props.transparent
      })}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = propTypes;
