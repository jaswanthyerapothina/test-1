import React from 'react';
import {shallow} from 'enzyme';

it('should test enzyme', () => {
  const comp = shallow(<div/>);
  expect(comp.type()).toEqual('div');
});
