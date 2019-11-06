import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdminPage from '../pages/AdminPage/AdminPage'
import HomeUser from '../pages/HomeUser/HomeUser'
import Login from '../pages/Login/Login'
import UserDetails from '../pages/UserDetails/UserDetails'
import UserUpdate from '../pages/UserUpdate/UserUpdate'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import Register from '../pages/Register/Register'
import IssueUpdate from '../pages/IssueUpdate/IssueUpdate'
import Dashboard from '../pages/Dashboard/Dashboard'
import TeamDetails from '../pages/TeamDetails/TeamDetails'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/home/:id' exact component={HomeUser} />
      <Route path='/dashboard/:id' exact component={Dashboard} />
      <Route path='/register' exact component={Register} />
      <Route path='/admin-page' exact component={AdminPage} />
      <Route path='/teams/get/:id' exact component={TeamDetails} />
      <Route path='/users/get/:id' exact component={UserDetails} />
      <Route path='/users/update/:id' exact component={UserUpdate} />
      <Route path='/issues/update/:id' exact component={IssueUpdate} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default Routes
