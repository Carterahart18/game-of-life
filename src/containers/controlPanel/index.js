import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button';
import Column from '../../components/column';
import PrefabSelector from '../../containers/prefabSelector';

import './styles.css';

const propTypes = {
  activePrefab: PropTypes.string.isRequired,
  drawingPrefab: PropTypes.bool.isRequired,
  onClear: PropTypes.func.isRequired,
  onRandomize: PropTypes.func.isRequired,
  onStep: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  setActivePrefab: PropTypes.func.isRequired,
  setDrawingPrefab: PropTypes.func.isRequired,
  running: PropTypes.bool.isRequired
};

export default function ControlPanel(props) {
  return (
    <Column className={'ControlPanel-container'}>
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
      <Button
        transparent={!props.drawingPrefab}
        onClick={() => props.setDrawingPrefab(drawing => !drawing)}
        text={'Draw Prefab'}
      />
      <PrefabSelector
        activePrefab={props.activePrefab}
        setActivePrefab={props.setActivePrefab}
      />
    </Column>
  );
}

ControlPanel.propTypes = propTypes;
