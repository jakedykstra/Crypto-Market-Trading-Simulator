import React, { Component } from 'react';

class Signin extends Component {

  render() {
    return (
            <div>
            <div id="headWrap" className="titleTab">
              <div>
                <img src="assets/images/btlogo3.png" />
                <h1 id="title">
                  Block Trade
                </h1>
              </div>
            </div>
            <div id="text-body">
              <div id="loginRegister">
                <h1>
                  Signin
                </h1>
                <form id="signin" name="signin" method="post" action="/login">
                  <label htmlFor="email" name="uname">Email Address</label>
                  <input className="text" name="email" type="email" placeholder="Enter Email" />
                  <label htmlFor="password">Password</label>
                  <input name="password" type="password" placeholder="Enter Password" />
                  <input className="btn" type="submit" defaultValue="Sign In" />
                </form>
              </div>
            </div>
          </div>
        );
    };
  };