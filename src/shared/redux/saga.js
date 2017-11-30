import { fork } from 'redux-saga/effects'
import { saga as authenticate } from './modules/authenticate'

export default function * () {
  yield fork(authenticate)
}
