import loadMap from './loadMap';

describe('loadMap', () => {
  it('loads google maps', () => {
    const ConstructorMock = jest.fn();
    const instanceMock = new ConstructorMock();
    const windowMock = { google: { maps: { Map: ConstructorMock } } };
    expect(loadMap(windowMock)).toStrictEqual(instanceMock);
  });
});
