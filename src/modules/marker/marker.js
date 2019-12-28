export default function marker(coordinates, map, image, win = window) {
  return new win.google.maps.Marker({
    position: coordinates,
    map,
  });
}
