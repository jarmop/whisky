import React, { useEffect } from 'react';

import './DistilleryMap.css';
// import drawMap from './leafletMap';
import drawMap from './mapboxMap';

const CONTAINER_ID = 'mapid';

export default function DistilleryMap() {
    useEffect(() => drawMap(CONTAINER_ID));
    return (
        <div>
            <div id={CONTAINER_ID}></div>
        </div>
    )
}