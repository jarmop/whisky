import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const CENTER_LATITUDE = 57.0042
const CENTER_LONGITUDE = -4.5518
const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1IjoiamFybW9wIiwiYSI6ImNrOW8xM2lxNzAxbmYzbHJ5a200aXNjeGYifQ.HcClAUYB_z8izQnQS3TQ5A'
const MAPBOX_STYLE_ID_STREET = 'mapbox/streets-v11'
const ATTRIBUTION =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>' +
  ' contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>' +
  ', Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'

export default function drawMap(containerId: string) {
  const mymap = L.map(containerId).setView(
    [CENTER_LATITUDE, CENTER_LONGITUDE],
    7
  )
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution: ATTRIBUTION,
      id: MAPBOX_STYLE_ID_STREET,
      // tileSize: 512,
      // zoomOffset: -1,
      accessToken: MAPBOX_ACCESS_TOKEN,
    }
  ).addTo(mymap)
}
