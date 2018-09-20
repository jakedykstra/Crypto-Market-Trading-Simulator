import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
    <Route path="/" exact component={Welcome} />
    <Route path="/signin" exact component={Signin} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/dashboard" exact component={Dashboard} />
    </App>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
