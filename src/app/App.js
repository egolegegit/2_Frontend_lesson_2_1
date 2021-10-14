import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from './components/providers/ThemeProvider'
import NavBar from './components/ui/navBar'
import Users from './layouts/users'
import Login from './layouts/login'
import Main from './layouts/main'

function App() {
  return (
    <ThemeProvider>
      <div className="layout-app">
        <div>
          <NavBar />
          <Switch>
            <Route path="/login:type?" component={Login} />
            <Route path="/users/:userId?" component={Users} />
            <Route path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
