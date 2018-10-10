import Login from '@/Login/container'
import * as React from 'react'
import { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/login' component={Login} />
        </div>
      </BrowserRouter>
    )
  }
}
