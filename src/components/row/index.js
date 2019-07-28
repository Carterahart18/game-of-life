import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  width: PropTypes.number
};

export default function Row(props) {
  return (
    <div className={'Row'}>
      {props.children}
    </div>
  );
}

Row.propTypes = propTypes;
