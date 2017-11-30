import axios from 'axios'
import { takeEvery, call, put } from 'redux-saga/effects'

/**
 * const
 */
const PATH = 'chat/authenticate/'

/**
 * initialState
 */
const initialState = {
  token: ''
}

/**
 * actions
 */
const UPDATE_TOKEN = PATH + 'UPDATE_TOKEN'
const LOGIN = PATH + 'LOGIN'

/**
 * reducers
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...state, token: action.payload}
    default:
      return state
  }
}

/**
 * action creaters
 */
export const login = () => ({
  type: LOGIN,
  payload: {
    username: 'test',
    password: 'test'
  }
})
export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  payload: token
})

/**
 * sagas
 */
export function * saga () {
  yield takeEvery(LOGIN, loginSaga)
}
export function * loginSaga ({ payload }) {
  try {
    const { data } = yield call(axios.post, '/api/authenticate', payload, {
      headers: { 'Content-Type': 'application/json' }
    }) 
    yield put(updateToken(data))
  } catch(error) {
    console.log(error)
  }
}
