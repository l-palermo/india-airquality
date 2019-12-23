import React, { useState, useEffect } from 'react';
import Marker from '../marker/Marker';

export default function Geocode({ dataEN, map, geocoder }) {
  const [coordinates, setCoordinates] = useState();

  const coordinatesList = [];
  let i = 1;
  let time = 100;
  let cityName;


  const findCoordinates = (func) => {
    cityName = dataEN[`compare-tabs_1_city_${i}_name`];
    geocoder.geocode({ address: cityName }, (results, status) => {
      if (status === 'OK') {
        i += 1;
        coordinatesList.push(results[0].geometry.location);
      } else {
        console.log(status);
        time += 100;
      }
    });
    if (i <= 10) { func(); }
    if (coordinatesList.length === 10) {
      setCoordinates(coordinatesList);
    }
  };

  const run = () => setTimeout(findCoordinates, time, run);

  useEffect(() => {
    run();
  }, []);


  return (
    <div>
      <ul>
        { coordinates
      && (
        coordinates.map((coordinate) => (
          <Marker
            key={coordinate}
            coordinates={coordinate}
            map={map}
          />
        ))
      )}
      </ul>
    </div>
  );
}
