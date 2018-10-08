import * as api from '@/models/api'
import { FetchTokenRequest, FetchTokenResponse, User } from '@/models/types'
import { RootState } from '@/store'
import { AxiosError } from 'axios'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { asyncFactory } from 'typescript-fsa-redux-thunk'

export interface LoginState {
  loggingIn: boolean
  loading: boolean
  loginFailed: boolean
  username: string
  password: string
  redirectToReferrer: boolean
}

const InitialState: LoginState = {
  loggingIn: false,
  loading: false,
  loginFailed: false,
  username: '',
  password: '',
  redirectToReferrer: false,
}

const actionCreator = actionCreatorFactory('User')

const asyncActionCreator = asyncFactory<RootState>(actionCreator)

export const actions = {
  fetchToken: asyncActionCreator<FetchTokenRequest, FetchTokenResponse, AxiosError>(
    'fetchToken',
    async (params, _, getState): Promise<FetchTokenResponse> => {
      return api.fetchToken(getState().login)
    },
  ),
  setUsername: actionCreator<string>('setUsername'),
  setPassword: actionCreator<string>('setPassword'),
}

export const reducers = reducerWithInitialState(InitialState)
  .case(actions.fetchToken.async.started, state => {
    return {
      ...state,
      loading: true,
    }
  })
  .case(actions.fetchToken.async.done, (state, payload) => {
    return {
      ...state,
      user: payload.result.user,
      loading: false,
      loggingIn: true,
    }
  })
  .case(actions.fetchToken.async.failed, (state, payload) => {
    return {
      ...state,
      loading: false,
      loginFailed: true,
    }
  })
  .case(actions.setUsername, (state, payload) => {
    return {
      ...state,
      username: payload,
    }
  })
  .case(actions.setPassword, (state, payload) => {
    return {
      ...state,
      password: payload,
    }
  })
