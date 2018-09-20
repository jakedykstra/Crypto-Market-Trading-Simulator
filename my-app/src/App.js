import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor({children}){
    super({children});

    this.state = { 
      selectedGraph: null,
      cryptoBuy: null,
      cryptoSell: null,
      portfolio: [],
      tradeHistory: [],
      SelectSignInOrUp: null
     }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App</h1>
        </header>
        <p className="App-intro">
        </p>
        {Welcome = sign}
      </div>
    );
  }
};



export default App;

// 