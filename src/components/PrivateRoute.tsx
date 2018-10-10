import * as auth from '@/lib/auth'
import * as React from 'react'
import { Component, ReactNode, SFC } from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router'

export interface Props {
  component: Component
  path: string
}

export const PrivateRoute: SFC<Props> = ({component, ...rest}) => {
  const render = (props: RouteComponentProps): ReactNode => {
    const token = auth.getToken()
    if (token && token.isValid()) {
      return (<Component {...props}/>)
    } else {
      if (token && !token.isValid()) {
        auth.removeAuthData()
      }
      return (<Redirect to={{
        pathname: '/login',
        state: { from: props.location },
      }}/>)
    }
  }
  return (
    <Route
      {...rest}
      render={render}
    />
  )
}
