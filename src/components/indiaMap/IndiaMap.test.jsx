import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IndiaMap from './IndiaMap';

configure({ adapter: new Adapter() });

describe('IndiaMap', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<IndiaMap />);
  });
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
