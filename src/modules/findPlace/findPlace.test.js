import findPlace from './findPlace';

describe('findPlace', () => {
  it('finds a place', () => {
    const mapMock = {};
    const requestMock = {};
    const markerMock = jest.fn((a) => a);
    const ConstructorMock = jest.fn();
    ConstructorMock.prototype.findPlaceFromQuery = (a, callback) => {
      callback(a, 'test');
    };
    const windowMock = {
      google: {
        maps: {
          places: {
            PlacesService: ConstructorMock,
            PlacesServiceStatus: { OK: 'test' },
          },
        },
      },
    };
    findPlace(mapMock, requestMock, markerMock, windowMock);
    expect(markerMock).toHaveBeenCalled();
  });
});
