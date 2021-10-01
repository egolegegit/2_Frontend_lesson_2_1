import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NavBar from './components/navBar'
import Users from './layouts/users'
import Login from './layouts/login'
import Main from './layouts/main'
// import UserPage from './components/userPage'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route
          path="/users/:userId"
          render={(props) => <UserPage {...props} />}
        /> */}
        <Route path="/users/:userId?" component={Users} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
