import React from 'react'
import { Route, Switch } from 'react-router-dom'

// components
import Home from './components/pages/home/'

export default () => (
  <Switch>
    <Route component={Home} />
  </Switch>
)
