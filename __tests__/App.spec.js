import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App';

it('should test enzyme', () => {
  const comp = shallow(<App/>);
  expect(comp.length).toEqual(1);
});
