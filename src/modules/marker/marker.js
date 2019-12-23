export default function marker(coordinates, map, win = window) {
  return new win.google.maps.Marker({
    position: coordinates,
    map,
  });
}
