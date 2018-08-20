/* global it, expect */

import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import React from 'react';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });
it('renders app without crashing', () => {
  const component = shallow(<App />);
  expect(component.exists()).toEqual(true);
});
