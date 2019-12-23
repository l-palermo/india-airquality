import marker from './marker';

describe('marker', () => {
  it('define a marker', () => {
    const map = {};
    const result = [{ geometry: { location: { lat: () => {}, lng: () => {} } } }];
    const ConstructorMock = jest.fn();
    const instanceMock = new ConstructorMock();
    const windowMock = {
      google: {
        maps: {
          Marker: ConstructorMock,
        },
      },
    };
    const Marker = marker(result, map, windowMock);
    expect(Marker).toStrictEqual(instanceMock);
  });
});
