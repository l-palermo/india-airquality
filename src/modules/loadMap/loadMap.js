export default function loadMap(win = window) {
  return new win.google.maps.Map(
    document.getElementById('map'), {
      center: { lat: 22.00, lng: 78.40 },
      zoom: 5,
    },
  );
}
