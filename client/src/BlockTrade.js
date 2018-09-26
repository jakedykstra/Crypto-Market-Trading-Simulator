import React, { Component } from 'react';
import './BlockTrade.css';
import UserData from './src/UserData';
import Graph from './src/graph/Graph'
import TradeHistoryTable from './src/TradeHistoryTable';
import Trades from './src/Trades';
import axios from 'axios';

//api call to get coin currency
//api call to get user reg
// api call to get user port or create user port

export default class BlockTrade extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      coinCurrency: {
        btcPrice: 0, 
        ethPrice: 0,
        ltcPrice: 145,
        xrpPrice: 0
        // make these into strings for displaying
      },
      userPortfolio: {
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
        ltc_val: 0,
      },
      tradeHistory: []
    }
    this.updatePortfolio = this.updatePortfolio.bind(this);
    // this.getCryptoPrice = this.getCryptoPrice.bind(this);
    this.getUserId = this.getUserId.bind(this);
    this.userPortfolio = this.userPortfolio.bind(this);
    this.createPort = this.createPort.bind(this); 
    this.getTradeHistory = this.getTradeHistory.bind(this); 
  }

  //this.usd +  this.btc_val + this.eth_val +  this.xrp_val + this.ltc_val,

  //Pulls from API and saves prices. Calls reAvaluate function to start off
  getCryptoPrice() {
    var bitcoinPrice 
    var ethereumPrice 
    var ripplePrice
    var litecoinPrice 
    axios.get(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC&tsyms=USD").then((data) => {
        console.log(data);
        console.log(data.data);
        console.log(data.data.RAW);
        this.setState({coinCurrency: {
          btcPrice: data.data.RAW.BTC.USD.PRICE,
          ethPrice: data.data.RAW.ETH.USD.PRICE,
          ltcPrice: data.data.RAW.LTC.USD.PRICE,
          xrpPrice: data.data.RAW.XRP.USD.PRICE
        }
      })
        // TODO: make component for rendering return this.tradeRate(this.state.coinCurrency.btcPrice, this.state.coinCurrency.ethPrice, this.state.coinCurrency.ltcPrice, this.state.coinCurrency.xrpPrice);
      }
    )
    .catch((error)=>{
      console.log(error);
   });
  }

  // gets our users id
  getUserId(){
    axios.get("api/user").then(function(data) {
    console.log(data);
    var userId = data.id;
    console.log(userId);
    this.userPortfolio(userId);
  });
}

  // function pulls portfolio data so we can render to the screen. If there is not portfolio data on user then we will call createPort to create one
  userPortfolio(userId){
    axios.get("api/user/" + userId).then(function(data) {
      console.log(data);
      var userPort = data;
      console.log(userPort);
      if (!userPort) {
        this.createPort(userId);
      } else {
        console.log(userPort);
        this.setState({userPortfolio: data})
          //reAvaluate(userPort);
      } 
    });
  }
  
  // get request where backend will create a portfolio and send the new data
  createPort(userId){
    axios.get(`api/newPort/${userId}`).then(function(data) {
      console.log(" createPort user portfolio data " + data);
      //reAvaluate(userPort);
      this.setState({userPortfolio: data})
    });
  }

   // updates portfolio with new data based on recent buy. Function is called after buy/sell functionality
  updatePortfolio(userPort){
    userPort.totalNet = userPort.usd +  userPort.btc_val + userPort.eth_val +  userPort.xrp_val + userPort.ltc_val
    this.setState({userPortfolio: userPort})
    console.log(this.state);
    //TODO: might have an id problem
    axios.put("/api/user/updatePortfolio", this.state.userPortfolio).then(function(data) {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // getting original tradeHistory data to populate
  getTradeHistory(){
    axios.get("/api/tradeHistory").then(function(data) {
      this.setState({tradeHistory: [data]})
      console.log(this.state.tradeHistory);
    });
  }

  newTrade(coinPrice, usdAmount, coinAmount, tradeType, cryptoType) {
    usdAmount = Math.round(usdAmount * 100) / 100;
    coinAmount = Math.round(coinAmount * 100) / 100;
    console.log(arguments)
    // setting variables from inputs
    var newTrade = {
      coinPrice,
      cryptoType,
      coinAmount,
      usdAmount,
      tradeType
    };
    function updateTradeHistory(newTrade) {
      axios.post("/api/tradeHistory", newTrade).then(function(data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    updateTradeHistory()
    this.getTradeHistory;
}


  componentDidMount () {
    this.getCryptoPrice();
    this.getUserId();
    this.getTradeHistory();
  }


  render() {

    return(
        <div>
      <UserData 
        userPortfolio={this.state.userPortfolio}
      />
      <Graph />
      <Trades 
        coinCurrency={this.state.coinCurrency}
        userPortfolio={this.state.userPortfolio} 
        updatePort={this.updatePortfolio} 
        tradeHistory={this.state.tradeHistory}
        newTrade={this.newTrade}
      />
      <TradeHistoryTable 
        tradeHistory={this.state.tradeHistory} 
      />
    </div>
    )
  }
};

