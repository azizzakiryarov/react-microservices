import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import UserDetails from '../pages/UserDetails/UserDetails'
import UserUpdate from '../pages/UserUpdate/UserUpdate'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/users' exact component={Home} />
      <Route path='/users/get/:id' exact component={UserDetails} />
      <Route path='/users/update/:id' exact component={UserUpdate} />
    </Switch>
  </BrowserRouter>
)

export default Routes
