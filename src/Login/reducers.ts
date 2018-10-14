import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as actions from './actions'
import { InitialState } from './container'

export const Reducers = reducerWithInitialState(InitialState)
  .case(actions.signIn.async.started, state => {
    return {
      ...state,
      loading: true,
    }
  })
  .case(actions.signIn.async.done, (state, payload) => {
    return {
      ...state,
      user: payload.result.user,
      loading: false,
      loggingIn: true,
    }
  })
  .case(actions.signIn.async.failed, state => {
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
