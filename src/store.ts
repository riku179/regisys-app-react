import { reducers as LoginReducers, LoginState } from '@/Login/modules'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk'
import { AnyAction } from 'typescript-fsa'

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
