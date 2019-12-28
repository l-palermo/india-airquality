/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Geocode from '../geocode/Geocode';


export default function IndiaMap({
  dataEN, loadGoogle, loadMap, findPlace,
}) {
  const [geocoder, setGeocoder] = useState();
  const [map, setMap] = useState();
  const citiesList = [];

  const cities = () => {
    for (let i = 1; i <= Number(dataEN.total_cities_1_value); i += 1) {
      citiesList.push(dataEN[`compare-tabs_1_city_${i}_name`]);
    }
    return citiesList;
  };

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
            dataEN={cities()}
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
