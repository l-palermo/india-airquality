/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Geocode from '../geocode/Geocode';


export default function IndiaMap({
  dataEN, loadGoogle, loadMap, findPlace,
}) {
  const [geocoder, setGeocoder] = useState();
  const [map, setMap] = useState();

  useEffect(() => {
    loadGoogle()
      .then(() => loadMap())
      .then((mapObj) => setMap(mapObj))
      .then(() => findPlace())
      .then((geocoderObj) => setGeocoder(geocoderObj));
  }, []);

  return (
    <div id="map" style={{ height: '95vh', width: '100%' }}>
      <div>
        { geocoder
          && (
          <Geocode
            dataEN={dataEN}
            map={map}
            geocoder={geocoder}
          />
          )}
      </div>
    </div>
  );
}

IndiaMap.propTypes = {
  dataEN: PropTypes.object.isRequired,
  loadGoogle: PropTypes.func.isRequired,
  loadMap: PropTypes.func.isRequired,
  findPlace: PropTypes.func.isRequired,
};
