import React from 'react';
// import PropTypes from 'prop-types';

import './styles.css';

// const propTypes = {
//   children: PropTypes.string
// };

export default function Header(props) {
  return (
    <div className={'Row'}>
      {props.children}
    </div>
  );
}

// Header.propTypes = propTypes;
