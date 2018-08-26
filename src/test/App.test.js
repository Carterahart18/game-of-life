import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import App from '../main';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<App />);
});
