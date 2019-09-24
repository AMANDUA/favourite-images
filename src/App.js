import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import UserPage from './UserPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/userPage" component={UserPage} /> 
    </Switch>
  )
}
