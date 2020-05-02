import mapboxgl, { LngLatLike } from 'mapbox-gl';
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

  map.on('load', () => {
    map.addSource('places', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              description:
                '<strong>Make it Mount Pleasant</strong><p>Make it Mount Pleasant is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
              icon: 'theatre',
            },
            geometry: {
              type: 'Point',
              coordinates: [scotlandCenter.lon, scotlandCenter.lat],
            },
          },
        ],
      },
    });

    map.addLayer({
      id: 'places',
      type: 'symbol',
      source: 'places',
      layout: {
        'icon-image': '{icon}-15',
        'icon-allow-overlap': true,
      },
    });

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.on('mouseenter', 'places', (e) => {
      if (
        e.features === undefined
        || e.features[0].geometry.type !== 'Point'
        || !(e.features[0].properties && e.features[0].properties.hasOwnProperty('description'))
      ) {
        return;
      }
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';

      const coordinates = e.features[0].geometry.coordinates.slice();
      // const coordinates = geometry.coordinates.slice();
      const { description } = e.features[0].properties;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      const lngLat: LngLatLike = [coordinates[0], coordinates[1]];

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup
        .setLngLat(lngLat)
        .setHTML(description)
        .addTo(map);

      map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
    });
  });

  // new mapboxgl.Popup()
  //   .setLngLat([scotlandCenter.lon, scotlandCenter.lat])
  //   .setHTML('<h1>Null Island</h1>')
  //   .addTo(map);
}
