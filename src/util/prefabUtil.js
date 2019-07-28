import glider from '../prefabs/glider';
import gliderGun from '../prefabs/glider_gun';

export const PREFABS = {
  GLIDER: 'GLIDER',
  GLIDER_GUN: 'GLIDER_GUN',
  SHIP_1: 'SHIP_1',
  SHIP_2: 'SHIP_2'
};

const PrefabMap = {
  [PREFABS.GLIDER]: glider,
  [PREFABS.GLIDER_GUN]: gliderGun,
  [PREFABS.SHIP_1]: [[]],
  [PREFABS.SHIP_2]: [[]]
};

export const getPrefab = prefab =>
  PrefabMap[prefab] && PrefabMap[prefab].data ? PrefabMap[prefab].data : [[]];
