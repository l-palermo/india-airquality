import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Geocode from './Geocode';

configure({ adapter: new Adapter() });

describe('Marker', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Geocode />);
  });

  test('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
