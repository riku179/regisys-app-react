import { LoginActions, LoginState } from '@/Login/modules'
import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import { SFC } from 'react'

interface Props {
  state: LoginState
  actions: LoginActions
}

export const LoginComponent: SFC<Props> = (props: Props) => {
  // const { from } = props.location.state || { from: { pathname: '/' } }

  return (
    <div>
      <TextField
        id='username'
        label='ユーザー名'
        value={props.state.username}
      />
    </div>
  )
}
