import { LoginReducers, LoginState } from '@/Login/modules'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

export interface RootState {
  login: LoginState,
}

export default createStore(
  combineReducers<RootState>({
    login: LoginReducers,
  }),
  {} as RootState,
  applyMiddleware(thunk),
)
