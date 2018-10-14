import { LoginState } from '@/Login/container'
import { Reducers } from '@/Login/reducers'
import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'

export interface RootState {
  login: LoginState,
}

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const thunk: ThunkMiddleware<RootState, AnyAction> = thunkMiddleware
export const store = createStore(
  combineReducers<RootState>({
    login: Reducers,
  }),
  composeEnhancers(
    applyMiddleware(thunk),
  ),
)
