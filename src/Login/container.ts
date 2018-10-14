import { FetchTokenResponse } from '@/models/types'
import { RootState } from '@/store'
import { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Action } from 'typescript-fsa'
import * as actions from './actions'
import LoginComponent from './view'

export interface LoginState {
  loggingIn: boolean
  loading: boolean
  loginFailed: boolean
  username: string
  password: string
  redirectToReferrer: boolean
}

export const InitialState: LoginState = {
  loggingIn: false,
  loading: false,
  loginFailed: false,
  username: '',
  password: '',
  redirectToReferrer: false,
}

export interface LoginAction {
  signIn: () => ThunkAction<Promise<FetchTokenResponse>, RootState, any, Action<any>>,
  setUsername: (e: ChangeEvent<HTMLInputElement>) => Action<string>
  setPassword: (e: ChangeEvent<HTMLInputElement>) => Action<string>
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): LoginAction => ({
  signIn: bindActionCreators(actions.signIn.action, dispatch),
  setUsername: (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.setUsername(e.target.value)),
  setPassword: (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.setPassword(e.target.value)),
})

const mapStateToProps = (state: RootState): LoginState => ({
  ...state.login,
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
