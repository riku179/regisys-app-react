import { LoginActions } from '@/Login/modules'
import { FetchTokenRequest } from '@/models/types'
import { RootState } from '@/store'
import { connect } from 'react-redux'
import { Action, Dispatch } from 'redux'
import { LoginComponent } from './view'

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    fetchToken: async (req: FetchTokenRequest) => await dispatch(LoginActions.fetchToken.async.started(req)),
    setUsername: (username: string) => dispatch(LoginActions.setUsername(username)),
    setPassword: (password: string) => dispatch(LoginActions.setPassword(password)),
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    ...state.login,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
