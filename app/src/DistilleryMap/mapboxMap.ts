import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

import { Coordinates, Distillery } from 'types'
import distilleries from 'data/distilleries'
import addComplexPopup from './mapboxComplexPopupExample'

const scotlandCenter: Coordinates = {
  lon: -4.5518,
  lat: 57.0042,
}

function createMarkerElement(): HTMLDivElement {
  const element = document.createElement('div')
  element.className = 'marker'

  return element
}

function addDistilleryToMap(map: mapboxgl.Map, distillery: Distillery) {
  const marker = new mapboxgl.Marker(createMarkerElement())
    .setLngLat([distillery.coordinates.lon, distillery.coordinates.lat])
    .setPopup(
      new mapboxgl.Popup({
        closeButton: false,
        className: 'popup',
      }).setHTML(`<div class="popup-title">${distillery.name}</div>`)
    )
    .addTo(map)

  // The popup opens on click by default, but other events can be used like this
  // const markerElement = marker.getElement();
  // markerElement.addEventListener('mouseenter', () => marker.togglePopup());
  // markerElement.addEventListener('mouseleave', () => marker.togglePopup());
}

export default function drawMap(containerId: string) {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiamFybW9wIiwiYSI6ImNrOW8xM2lxNzAxbmYzbHJ5a200aXNjeGYifQ.HcClAUYB_z8izQnQS3TQ5A'
  const map = new mapboxgl.Map({
    container: containerId,
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [scotlandCenter.lon, scotlandCenter.lat],
    zoom: 6.5,
  })

  distilleries.forEach((distillery) => addDistilleryToMap(map, distillery))

  addComplexPopup(map, [scotlandCenter.lon, scotlandCenter.lat])
}
