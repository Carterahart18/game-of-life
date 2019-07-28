import React from 'react';
import PropTypes from 'prop-types';
import { PREFABS } from '../../util/prefabUtil';

import Button from '../../components/button';
import Column from '../../components/column';
import Row from '../../components/row';

// import './styles.css';

const propTypes = {
  activePrefab: PropTypes.string.isRequired,
  setActivePrefab: PropTypes.func.isRequired
};

export default function PrefabSelector({ activePrefab, setActivePrefab }) {
  return (
    <Column className={'PrefabSelector-container'}>
      <Row>
        <Button
          transparent={activePrefab !== PREFABS.GLIDER}
          inline
          onClick={() => setActivePrefab(PREFABS.GLIDER)}
          text={'Glider'}
        />
        <Button
          transparent={activePrefab !== PREFABS.GLIDER_GUN}
          inline
          onClick={() => setActivePrefab(PREFABS.GLIDER_GUN)}
          text={'Glider Gun'}
        />
      </Row>
      <Row>
        <Button
          transparent={activePrefab !== PREFABS.SHIP_1}
          inline
          onClick={() => setActivePrefab(PREFABS.SHIP_1)}
          text={'Ship 1'}
        />
        <Button
          transparent={activePrefab !== PREFABS.SHIP_2}
          inline
          onClick={() => setActivePrefab(PREFABS.SHIP_2)}
          text={'Ship 2'}
        />
      </Row>
    </Column>
  );
}

PrefabSelector.propTypes = propTypes;
