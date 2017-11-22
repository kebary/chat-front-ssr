import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import template from './template'
import { Routes, configureStore } from '../shared'

const context = {}

export default (req, res) => {
  // Create a new Redux store instance
  const store = configureStore()

  // Render the component to a string
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState()

  // Send the rendered page back to the client
  res.send(template(html, preloadedState))
}
