import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing'
import Login from './components/login/Login'
import Signup from './components/login/Signup'
import Dashboard from './Dashboard'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}