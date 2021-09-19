import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/navBar'
import Users from './components/users'
import Login from './layouts/login'
import Main from './layouts/main'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  )
}

export default App
