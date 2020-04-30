import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Catalog from 'Catalog/Catalog';

export default function App() {

    const catalogUrl = process.env.PUBLIC_URL + '/catalog';
    console.log(catalogUrl)

    return (
        <Router>
            <Switch>
                <Route path={catalogUrl}>
                    <Catalog/>
                </Route>
                <Route path="/">
                    <div>test</div>
                </Route>
            </Switch>
        </Router>
    );
}