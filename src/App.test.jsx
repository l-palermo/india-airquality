import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Header from './components/header/Header';
import IndiaMap from './components/indiaMap/IndiaMap';
import Footer from './components/footer/Footer';

configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('renders Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });
  test('renders Header component', () => {
    expect(wrapper.find(IndiaMap)).toHaveLength(1);
  });
  test('renders Header component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});
