import React, { useEffect } from 'react';
import API_KEY from '../../api_key';

export default function IndiaMap() {
  const loadMap = () => {
    const map = new window.google.maps.Map(
      document.getElementById('map'), {
        center: { lat: 22.00, lng: 78.40 },
        zoom: 5,
      },
    );
    return map;
  };

  const loadGoogle = () => new Promise((resolve) => {
    const s = document.createElement('script');
    s.src = `https://maps.google.com/maps/api/js?key=${API_KEY}`;
    document.body.appendChild(s);
    s.addEventListener('load', () => {
      resolve();
    });
  });

  useEffect(() => {
    if (!window.google) {
      loadGoogle().then(() => loadMap());
    } else {
      loadMap();
    }
  });

  return (
    <div id="map" style={{ height: '95vh', width: '100%' }} />
  );
}
