import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import './DistilleryMap.css';

const CONTAINER_ID = 'mapid';
const CENTER_LATITUDE = 51.505;
const CENTER_LONGITUDE = -0.09;

function drawMap() {
    console.log('drawMap')
    const mymap = L.map(CONTAINER_ID).setView([CENTER_LATITUDE, CENTER_LONGITUDE], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        // tileSize: 512,
        // zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(mymap);
}

export default function DistilleryMap() {
    useEffect(drawMap);
    return (
        <div>
            <div id={CONTAINER_ID}></div>
        </div>
    )
}