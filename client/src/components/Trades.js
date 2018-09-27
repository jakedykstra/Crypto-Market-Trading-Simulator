import React, { Component } from 'react';

// displays the user's investments in ea crypto
class Trades extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      btcBuy: '',
      btcSell: '',
      ethBuy: '',
      ethSell: '',
      ltcBuy: '',
      ltcSell: '',
      xrpBuy: '',
      xrpSell: '',
      type: '',
      name: '',
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
 
  }

  handleChange(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target.name)
    var val = e.target.value
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
    if (this.state.type == "Buy"){
      this.cryptoPurchase(this.state.name, this.state.value)
    } else {
      this.cryptoSell(this.state.name, this.state.value)
    }
    this.setState({[(this.state.name + this.state.type)]: ''})
    console.log(this.state);
  }

  cryptoPurchase(cryptoType, amount){
    amount = parseFloat(amount)

    // check to make sure it is now a number
    if(typeof amount == 'number'){
      console.log("number!")
     }else{
      console.log("now a number")
     }
     // set crypto val for checking then test
    var crypto = cryptoType + "Price"
    console.log(this.props.userPortfolio);
    console.log(this.props.coinCurrency[crypto]);
    // creating a coin amount to work off of. Takes the usd amount were spending and divides it by the cryptocoins current rate to get the amount of coins now in the portfolio
    var amountOfCoins = amount / this.props.coinCurrency[crypto];
    // checking to make sure you have enough in your portfolio for the purchase
    if (amount > this.props.userPortfolio.usd) {
      console.log("You dont have enough usd to buy!");
    } else {
      // if theres enough get the code running!
      // take the amount inserted from the usd in portfolio
      this.props.userPortfolio.usd -= amount;
      // take the crypto amount from portfolio and add the amountOfCoins just purchased
      this.props.userPortfolio[cryptoType] += amountOfCoins;
      // now we are getting the usd equivalence
      // the value is equal to the amount of coins we have multiplied by the current rate of the coin
      var cryptoTypeVal = cryptoType + "_val"
      this.props.userPortfolio[cryptoTypeVal] = this.props.userPortfolio[cryptoType] * this.props.coinCurrency[crypto];
      console.log(this.props.userPortfolio);
      // updating the coin api
      this.props.updateApi();
      // updating the userportfolio
      this.props.updatePort(this.props.userPortfolio);
      // updating the tradeHistory
      this.props.newTrade(this.props.coinCurrency[crypto], amount, amountOfCoins, "Buy", cryptoType)
    }
    
  }

  cryptoSell(cryptoType, amount){
    amount = parseFloat(amount)
    var crypto = cryptoType + "Price"
    // setting amount of coins to amount selling multiplied by current crypto worth
    var coinWorth = amount * this.props.coinCurrency[crypto];
    // checking that amount of coin you're trying to sell is equal or less than amount of coins in user portfolio
    if (amount >= this.props.userPortfolio[cryptoType]) {
      console.log("You dont have enough coin to sell!");
    } else {
      // if you have enough coin
      // add usd for selling crypto to usd
      this.props.userPortfolio.usd += coinWorth;
      this.props.userPortfolio[cryptoType] -= amount;
      var cryptoTypeVal = cryptoType + "_val"
      // value of crypto coin you own becomes the coin you now own multiplied by the current cryptorate
      this.props.userPortfolio[cryptoTypeVal] = this.props.userPortfolio[cryptoType] * this.props.coinCurrency[crypto];
      // update api, userPort, and tradeHistory
      this.props.updateApi();
      this.props.updatePort(this.props.userPortfolio);
      this.props.newTrade(this.props.coinCurrency[crypto], amount, coinWorth, "Sell", cryptoType)
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
              <button type="submit" className="sellButton" id="sellXRP">Sell</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Trades;
