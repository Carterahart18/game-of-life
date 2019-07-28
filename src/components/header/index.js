import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  text: PropTypes.string
};

export default function Header(props) {
  return (
    <div className={'App-header'}>
      <h1 className={'App-header-text'}>{props.text}</h1>
    </div>
  );
}

Header.propTypes = propTypes;
