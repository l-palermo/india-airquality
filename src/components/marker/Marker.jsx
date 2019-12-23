import React from 'react';
import marker from '../../modules/marker/marker';

export default function Marker({ coordinates, map }) {
  marker(coordinates, map);
  return (null);
}
