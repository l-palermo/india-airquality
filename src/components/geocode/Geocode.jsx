import React, { useState, useEffect } from 'react';
import Marker from '../marker/Marker';

export default function Geocode({ dataEN, map, geocoder }) {
  const coordinates = [{ lat: 19.077577, lng: 72.930515 }];

/*   const [coordinates, setCoordinates] = useState();

  const coordinatesList = [];
  let i = 1;
  let time = 400;


  const findCoordinates = (func) => {
    geocoder.geocode({ address: dataEN[i] }, (results, status) => {
      if (status === 'OK') {
        i += 1;
        console.log(results[0].geometry.location);
        coordinatesList.push(results[0].geometry.location);
      } else {
        console.log(status);
        time += 100;
      }
    });
    if (i <= 1) { func(); }
    if (coordinatesList.length === 1) {
      setCoordinates(coordinatesList);
    }
  };

  const run = () => setTimeout(findCoordinates, time, run);

  useEffect(() => {
    run();
  }, []); */


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
