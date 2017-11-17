import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import reducer from './reducer'
import saga from './saga'

const logger = createLogger({})
const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(
  sagaMiddleware,
  logger
)

export default (initialState) => {
  const store = createStore(
    reducer,
    initialState,
    middleware
  )
  sagaMiddleware.run(saga)
  // hmr
  module.hot && module.hot.accept('./reducer', () => {
    store.replaceReducer((require('./reducer').default))
  })
  return store
}
