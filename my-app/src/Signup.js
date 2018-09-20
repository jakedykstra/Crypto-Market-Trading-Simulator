import React, { Component } from 'react';

class Signup extends Component {

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
                  Signup
                </h1>
                <form id="signup" name="signup" method="post" action="/login">
                  <label htmlFor="email" name="uname">Email Address</label>
                  <input className="text" name="email" type="email" placeholder="Enter Email" />
                  <label htmlFor="password">Password</label>
                  <input name="password" type="password" placeholder="Enter Password" />
                  <input className="btn" type="submit" defaultValue="Sign Up" />
                </form>
              </div>
            </div>
          </div>
        );
    };
  };