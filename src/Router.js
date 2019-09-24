import React from 'react';
import { Router, Route, browserHistory} from 'react-router'
import LoginPage from './LoginPage'
import Home from './HomePage'
import App from './App';

const Routes = (
    <Router history = {browserHistory}>
       <Route path = "/" component = {App}>
          <Route path = "/login" component = {LoginPage} />
          <Route path = "home" component = {Home} />
       </Route>
    </Router>
);

export default Routes;