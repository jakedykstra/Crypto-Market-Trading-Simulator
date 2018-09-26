import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


export default class Landing extends Component {

  render(){
    return (
      <div>
        <div id="headWrap">
          <h3>Welcome! Sign up or sign in!</h3>;
          <div>
            <img src="assets/images/btlogo3.png" />
            <h1 id="title">Block Trade</h1>
          </div>
        </div>
        <div id="main">
          <div id="splashDiv">
            <div id="splashWrap" />
          </div>
          <h4>Get Started!</h4>
          <button id="signIn">
            <Link to="/login">Login</Link>
          </button>
          <button id="signUp">
            <Link to="/signup">Signup</Link>
        </button>
        </div>
        <div id="text-body">
          <div id="description">
            <h1>Welcome to Block Trade</h1>
            <br />
            <h3>
              Interested in the cryptocurrency market? Better be careful... it's
              awfully volatile.
            </h3>
            <p>
              Try learning cryptocurrency trading with Block Trade. It's a fun and
              interactive way to learn how to trade without the risk of losing
              that trust fund. Click get started to buy/sell the top
              cryptocurrencies that are updated based on their real-time numbers.
            </p>
          </div>
        </div>
      </div>
    );
  }
};