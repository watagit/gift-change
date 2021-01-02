import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import * as History from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import { UsersReducer } from '../users/reducers'

export default function createStore(history: any) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}
