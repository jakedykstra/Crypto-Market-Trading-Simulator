import React, { Component, useState, useEffect } from 'react';
import usePort from './customHooks/usePortfolio';
import useId from './customHooks/useId';
import './BlockTrade.css';
import UserData from './components/UserData';
import Graph from './components/graph/Graph'
import TradeHist from './components/tradeHist/TradeHist';
import Trades from './components/Trades';
import axios from 'axios';

// initial start to program, calls for portfolio state and if null starts portfolio
export default function Dashboard() {
const [userId, updateUserId] = useId(); 

const checkDBForPortfolio = () => {
  if (usePort(userId) === null) {
    newUserPortfolio();
  };
}

// creates new user portfolio
const newUserPortfolio = () => {
  const initalPort = {
    userId: 1,
    totalNet: 10000,
    usd: 10000,
    btc: 0,
    btc_val: 0,
    eth: 0,
    eth_val: 0,
    xrp: 0,
    xrp_val: 0,
    ltc: 0,
    ltc_val: 0
  }
  setDbPortfolio(initalPort)
}

const setDbPortfolio = (port) => {
  axios.post(`api/user/${userId}`, port).then((data) => {
    console.log(data);
    return data;
  })
}



  // function pulls portfolio data so we can render to the screen. If there is not portfolio data on user then we will call createPort to create one
const updateDbPortfolio = (userPort) => {
  userPort.totalNet = userPort.usd +  userPort.btc_val + userPort.eth_val +  userPort.xrp_val + userPort.ltc_val
  axios.put("/api/user/updatePortfolio", this.state.userPortfolio).then(function(data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
  

   // updates portfolio with new data based on recent buy. Function is called after buy/sell functionality
const updatePortfolio = (userPort) => {
    userPort.totalNet = userPort.usd +  userPort.btc_val + userPort.eth_val +  userPort.xrp_val + userPort.ltc_val
    axios.put("/api/user/updatePortfolio", this.state.userPortfolio).then(function(data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    return(
        <div>
          <div id="profileContainers">
            {UserData()}
            <Graph />
            <Trades />
          </div>
          {TradeHist()}
    </div>
    )
};