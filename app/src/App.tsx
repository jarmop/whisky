import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Catalog from 'Catalog/Catalog'
import DistilleryMap from 'DistilleryMap/DistilleryMap'

export default function App() {
  const homeUrl = `${process.env.PUBLIC_URL}/`
  const catalogUrl = `${process.env.PUBLIC_URL}/catalog`
  return (
    <Router>
      <Link to={homeUrl}>Home</Link>
      {' | '}
      <Link to={catalogUrl}>Catalog</Link>
      <Switch>
        <Route path={catalogUrl}>
          <Catalog />
        </Route>
        <Route path={homeUrl}>
          <DistilleryMap />
        </Route>
      </Switch>
    </Router>
  )
}
