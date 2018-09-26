import React, { Component } from 'react';
import './styles.css';

// displays the user's investments in ea crypto
class Trades extends React.Component {
  constructor(props){
    super(props)

    var userPortfolio = this.props.userPortfolio;
    var tradeHistory = this.props.tradeHistory;

    this.state = {
      btcBuy: 0,
      btcSell: 0,
      ethBuy: 0,
      ethSell: 0,
      ltcBuy: 0,
      ltcSell: 0,
      xrpBuy: 0,
      xrpSell: 0,
      type: '',
      name: '',
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }

  handleChange(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target.name)
    var val = parseFloat(e.target.value)
    console.log(e.target.className)
    this.setState({ 
      [(e.target.name + e.target.className)]: val,
      value: val,
      type: e.target.className,
      name: e.target.name,
     })
     console.log(this.state)
    }


  
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log(this.state.type);
    console.log(this.state.name);
    console.log(this.state.value);
    console.log('A name was submitted: ');
    if (this.state.type === "Buy"){
      this.cryptoPurchase(this.state.name, this.state.value)
    } else {
      this.cryptoSell(this.state.name, this.state.value)
    }
    this.setState({[(this.state.name + this.state.type)]: 0})
    console.log(this.state);
  }

  cryptoPurchase(cryptoType, amount){
    if(typeof amount == 'number'){
      console.log("number!")
     }else{
      console.log("now a number")
     }
    var crypto = cryptoType + "Price"
    console.log(crypto)
    console.log(this.props.userPortfolio);
    console.log(this.props.coinCurrency[crypto]);
    if(typeof this.props.coinCurrency[crypto] == 'number'){
      console.log("number!")
     }else{
      console.log("now a number")
     }
    var totalAmount = amount / this.props.coinCurrency[crypto];
    if (amount > this.props.userPortfolio.usd) {
      // alert("You dont have enough");
      console.log("You dont have enough!");
    } else {
      this.props.userPortfolio.usd -= amount;
      this.props.userPortfolio[cryptoType] += totalAmount;
      var cryptoTypeVal = cryptoType + "_val"
      //TODO: need to fix eth
      this.props.userPortfolio[cryptoTypeVal] = this.props.userPortfolio[cryptoType] * this.props.coinCurrency[crypto];
      console.log(this.props.userPortfolio);
      this.props.updatePort(this.props.userPortfolio);
      this.props.newTrade(this.props.coinCurrency[crypto], amount, totalAmount, "Buy", cryptoType)
    }
    
  }

  cryptoSell(cryptoType, amount){
    var crypto = cryptoType + "Price"
    var totalAmount = amount * this.props.coinCurrency[crypto];
    if (amount > this.props.userPortfolio[cryptoType]) {
      // alert("You dont have enough");
      console.log("You dont have enough!");
    } else {
      this.props.userPortfolio.usd += amount;
      this.props.userPortfolio[cryptoType] -= totalAmount;
      var cryptoTypeVal = cryptoType + "_val"
      //TODO: need to fix eth
      this.props.userPortfolio.cryptoTypeVal = this.props.userPortfolio[cryptoType] * this.props.coinCurrency[crypto];
      this.props.newTrade(this.props.coinCurrency[crypto], amount, totalAmount, "Buy", cryptoType)
    }
    
  }

  render() {
    
    return(
      <div id="tradeContainer">
        <div className="titleTab">
          <h1 className>Trades</h1>
        </div>
        <div id="coin" className="bitCoin">
          <div className="priceImage">
            <img className="bitImage" src="assets/images/bitcoin.png" />
            <h1 className="price">${this.props.coinCurrency.btcPrice}</h1>
          </div>
          <div className="inputFields">
            <form onSubmit={this.handleSubmit}>
              <input id="amount-btc" onChange={this.handleChange} className="Buy" value={this.state.btcBuy}name="btc" placeholder="Buy Amount (Dollars)" />
              <button className="buyButton" id="buybtc">Buy</button>
            </form>
            <form onSubmit={this.handleSubmit}>  
              <input id="amount-btc2" onChange={this.handleChange} className="Sell" value={this.state.btcSell}name="btc" placeholder="Sell Amount (Coins)" />
              <button className="sellButton" id="sellbtc">Sell</button>
            </form>
          </div>
        </div>
        <div id="coin" className="liteCoin">
          <div className="priceImage">
            <img className="bitImage" src="assets/images/litecoin.png" />
            <h1 className="price">${this.props.coinCurrency.ltcPrice}</h1>
          </div>
          <div className="inputFields">
            <form onSubmit={this.handleSubmit}>
              <input id="amount-ltc" onChange={this.handleChange} value={this.state.ltcBuy} className="Buy" name="ltc" placeholder="Buy Amount (Dollars)" />
              <button className="buyButton" id="buyLTC">Buy</button>
            </form>
            <form onSubmit={this.handleSubmit}>
              <input id="amount-ltc2" onChange={this.handleChange} value={this.state.ltcSell}className="Sell" name="ltc" placeholder="Sell Amount (Coins)" />
              <button className="sellButton" id="sellLTC">Sell</button>
            </form>
          </div>
        </div>
        <div id="coin" className="ethereumCoin">
          <div className="priceImage">
            <img className="bitImage" src="assets/images/ethereum.png" />
            <h1 className="price">${this.props.coinCurrency.ethPrice}</h1>
          </div>
          <div className="inputFields">
            <form onSubmit={this.handleSubmit}>
              <input id="amount-eth" onChange={this.handleChange} className="Buy" value={this.state.ethBuy}name="eth" placeholder="Buy Amount (Dollars)" />
              <button className="buyButton" id="buyEther">Buy</button>
            </form>
            <form onSubmit={this.handleSubmit}>
              <input id="amount-eth2" onChange={this.handleChange} className="Sell" name="eth" value={this.state.ethSell} placeholder="Sell Amount (Coins)" />
              <button className="sellButton" id="sellEther">Sell</button>
            </form>
          </div>
        </div>
        <div id="coin" className="rippleCoin">
          <div className="priceImage">
            <img className="bitImage" src="assets/images/ripple.png" />
            <h1 className="price">${this.props.coinCurrency.xrpPrice}</h1>
          </div>
          <div className="inputFields">
            <form onSubmit={this.handleSubmit}>
              <input type="text" id="amount-xrp" className="Buy" name="xrp" value={this.state.xrpBuy} placeholder="Buy Amount (Dollars)" onChange={this.handleChange}/>
              <button type="submit" className="buyButton" id="buyXRP">Buy</button>
            </form>
            <form onSubmit={this.handleSubmit}>
              <input type="text" id="amount-xrp2" className="Sell" name="xrp" value={this.state.xrpSell}placeholder="Sell Amount (Coins)" onChange={this.handleChange}/>
              <button type="button" className="sellButton" id="sellXRP">Sell</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Trades;
