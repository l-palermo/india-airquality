import React from 'react';
import GoogleMapReact from 'google-map-react';
import API_KEY from '../../.api_key.js';

export default function IndiaMap() {
  const defaultProps = {
    centre: {
      lat: 22.00,
      lng: 78.40
    },
    zoom: 5
  };
  return(
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
      bootstrapURLKeys={{ key: API_KEY }}
      defaultCenter={defaultProps.centre}
      defaultZoom={defaultProps.zoom}>

      </GoogleMapReact>
    </div>
  )
}