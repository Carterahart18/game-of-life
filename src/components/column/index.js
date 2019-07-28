import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  className: PropTypes.string
};

export default function Header(props) {
  return (
    <div className={`Column ${props.className}`}>
      {props.children}
    </div>
  );
}

Header.propTypes = propTypes;
