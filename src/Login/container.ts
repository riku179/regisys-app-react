import { actions } from '@/Login/modules'
import { FetchTokenRequest, FetchTokenResponse } from '@/models/types'
import { RootState } from '@/store'
import { ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { Action } from 'typescript-fsa'
import LoginComponent from './view'

export interface LoginAction {
  fetchToken: (req: FetchTokenRequest) => Promise<Action<FetchTokenRequest>>
  setUsername: (e: ChangeEvent<HTMLInputElement>) => Action<string>
  setPassword: (e: ChangeEvent<HTMLInputElement>) => Action<string>
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => {
  return {
    fetchToken: async (req: FetchTokenRequest) => await dispatch(actions.fetchToken.async.started(req)),
    setUsername: (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.setUsername(e.target.value)),
    setPassword: (e: ChangeEvent<HTMLInputElement>) => dispatch(actions.setPassword(e.target.value)),
  } as LoginAction
}

const mapStateToProps = (state: RootState) => {
  return {
    ...state.login,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
