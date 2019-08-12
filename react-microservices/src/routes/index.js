import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import User from '../pages/User/User';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/get/:id" component={User} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;