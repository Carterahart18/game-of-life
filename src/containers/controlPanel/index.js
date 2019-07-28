import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button';

import './styles.css';

const propTypes = {
  running: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onRandomize: PropTypes.func.isRequired
};

export default function ControlPanel(props) {
  return (
    <div className={'ControlPanel-container'}>
      <Button
        id={'toggle'}
        onClick={props.onToggle}
        text={props.running ? 'Stop' : 'Start'}
      />
      <Button
        id={'random'}
        disabled={props.running}
        onClick={props.onRandomize}
        text={'Randomize'}
      />
    </div>
  );
}

ControlPanel.propTypes = propTypes;
