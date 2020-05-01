import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'

enum ScotlandCenter {
    Lon = -4.5518,
    Lat = 57.0042,
}

export default function drawMap(containerId: string) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiamFybW9wIiwiYSI6ImNrOW8xM2lxNzAxbmYzbHJ5a200aXNjeGYifQ.HcClAUYB_z8izQnQS3TQ5A';
    new mapboxgl.Map({
        container: containerId,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [ScotlandCenter.Lon, ScotlandCenter.Lat],
        zoom: 6,
    });
}