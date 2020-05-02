import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { Coordinates } from 'types';
import distilleries from 'data/distilleries';

const scotlandCenter: Coordinates = {
  lon: -4.5518,
  lat: 57.0042,
};

export default function drawMap(containerId: string) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiamFybW9wIiwiYSI6ImNrOW8xM2lxNzAxbmYzbHJ5a200aXNjeGYifQ.HcClAUYB_z8izQnQS3TQ5A';
  const map = new mapboxgl.Map({
    container: containerId,
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [scotlandCenter.lon, scotlandCenter.lat],
    zoom: 6,
  });

  distilleries.forEach((distillery) => new mapboxgl.Marker()
    .setLngLat([distillery.coordinates.lon, distillery.coordinates.lat])
    .addTo(map));
}
