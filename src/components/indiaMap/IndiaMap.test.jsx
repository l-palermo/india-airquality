import React from 'react';
import { render } from '@testing-library/react';
import IndiaMap from './IndiaMap';

describe('IndiaMap', () => {
  let loadGoogle;
  let loadMap;
  let findPlace;
  let dataEN;

  beforeEach(() => {
    loadGoogle = jest.fn(() => new Promise((resolve) => resolve()));
    loadMap = jest.fn();
    findPlace = jest.fn();
    dataEN = {};
    render(<IndiaMap
      dataEN={dataEN}
      loadGoogle={loadGoogle}
      loadMap={loadMap}
      findPlace={findPlace}
    />);
  });
  test('calls the loadGoogle  module', () => {
    expect(loadGoogle).toHaveBeenCalled();
  });
  test('calls the loadMap module', () => {
    expect(loadMap).toHaveBeenCalled();
  });
  test('calls the findPlace module', () => {
    expect(findPlace).toHaveBeenCalled();
  });
});
