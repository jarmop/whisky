import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Catalog from 'Catalog/Catalog';
import DistilleryMap from 'DistilleryMap/DistilleryMap';

export default function App() {
    const catalogUrl = process.env.PUBLIC_URL + '/catalog';
    return (
        <Router>
            <Switch>
                <Route path={catalogUrl}>
                    <Catalog/>
                </Route>
                <Route path="/">
                    <DistilleryMap/>
                </Route>
            </Switch>
        </Router>
    );
}