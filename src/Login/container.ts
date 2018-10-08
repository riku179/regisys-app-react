import { actions } from '@/Login/modules'
import { FetchTokenRequest, FetchTokenResponse } from '@/models/types'
import { RootState } from '@/store'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { LoginComponent } from './view'

interface Action {
  fetchToken: (req: FetchTokenRequest) => Action<FetchTokenResponse>
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    fetchToken: async (req: FetchTokenRequest) => await dispatch(actions.fetchToken.async.started(req)),
    setUsername: (username: string) => dispatch(actions.setUsername(username)),
    setPassword: (password: string) => dispatch(actions.setPassword(password)),
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    ...state.login,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
