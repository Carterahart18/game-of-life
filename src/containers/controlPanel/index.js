import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button';

import './styles.css';

const propTypes = {
  running: PropTypes.bool.isRequired,
  onClear: PropTypes.func.isRequired,
  onStep: PropTypes.func.isRequired,
  onRandomize: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default function ControlPanel(props) {
  return (
    <div className={'ControlPanel-container'}>
      <Button
        onClick={props.onToggle}
        text={props.running ? 'Stop' : 'Start'}
      />
      <Button disabled={props.running} onClick={props.onStep} text={'Step'} />
      <Button
        disabled={props.running}
        onClick={props.onRandomize}
        text={'Randomize'}
      />
      <Button onClick={props.onClear} text={'Clear'} />
    </div>
  );
}

ControlPanel.propTypes = propTypes;
