import { LoginState, reducers as LoginReducers } from '@/Login/modules'
import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'

export interface RootState {
  login: LoginState,
}

const thunk: ThunkMiddleware<RootState, AnyAction> = thunkMiddleware
export default createStore(
  combineReducers<RootState>({
    login: LoginReducers,
  }),
  applyMiddleware(thunk),
)
