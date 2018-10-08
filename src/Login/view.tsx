import { actions, LoginState } from '@/Login/modules'
import TextField from '@material-ui/core/TextField'
import * as React from 'react'
import { SFC } from 'react'
import { RouteComponentProps } from 'react-router'

type Props = LoginState & actions & RouteComponentProps

export const LoginComponent: SFC<Props> = (props: Props) => {
  const { from } = props.location.state || { from: { pathname: '/' } }
  console.log(from)
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
