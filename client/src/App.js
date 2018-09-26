import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './src/Landing'
import Login from './src/login/Login'
import Signup from './src/login/Signup'
import BlockTrade from './BlockTrade'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/Dashboard" component={BlockTrade} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}