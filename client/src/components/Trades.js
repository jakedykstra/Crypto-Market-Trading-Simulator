import React from 'react';
import useTransaction from '../customHooks/useTransaction';
import useCrypto from '../customHooks/useCrypto';
import userPort from '../customHooks/usePortfolio';
import TradeHist from './tradeHist/TradeHist';
import Dashboard from '../Dashboard';

// displays the user's investments in ea crypto
export default function Trades() {
  const transaction = useTransaction();
  const usePort = userPort();
  const useCrypt = useCrypto();

  const handleChange = (e) => {
    e.preventDefault()
    var val = e.target.value
    transaction({ 
      [(e.target.name + e.target.className)]: val,
      value: val,
      type: e.target.className,
      name: e.target.name,
     })
     console.log(transaction);
    }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transaction);
    transactionCalc(transaction.name, transaction.value, transaction.type)
    transaction({[(transaction.name + transaction.type)]: ''})
    console.log(transaction);
  }

  const transactionCalc = (cryptoType, amount, type) => {
    amount = parseFloat(amount)
     // set crypto val for checking then test
    var crypto = cryptoType + "Price"
    // creating a coin amount to work off of. Takes the usd amount were spending and divides it by the cryptocoins current rate to get the amount of coins now in the portfolio
    var amountOfCoins = amount / useCrypt[crypto];
    // setting amount of coins to amount selling multiplied by current crypto worth
    var coinWorth = amount * useCrypt[crypto];
    // checking to make sure you have enough in your portfolio for the purchase
    if (type === "Buy") {
      if (amount > usePort.usd) {
        console.log("You dont have enough usd to buy!");
      } else {
         // if theres enough get the code running!
      // take the amount inserted from the usd in portfolio
      usePort.usd -= amount;
      // take the crypto amount from portfolio and add the amountOfCoins just purchased
      usePort[cryptoType] += amountOfCoins;
      }
    } else {
      // check whether you have the coin to sell
      if (amount > usePort[cryptoType]) {
        console.log("You dont have enough coin to sell!");
      } else {
        usePort.usd += coinWorth;
        usePort[cryptoType] -= amount;
      }
    } 
    var cryptoTypeVal = cryptoType + "_val"
    // now we are getting the usd equivalence
    // the value is equal to the amount of coins we have multiplied by the current rate of the coin
    usePort[cryptoTypeVal] = usePort[cryptoType] * useCrypt[crypto];
    console.log(usePort);
    // updating the userportfolio
    Dashboard.updateDbPort(usePort);
    // updating the tradeHistory
    TradeHist.newTrade(useCrypt[crypto], amount, amountOfCoins, transaction.type, cryptoType)  
  }

    return(
      <div id="tradeContainer">
        <div className="titleTab">
          <h1 className>Trades</h1>
        </div>
        <div id="coin" className="bitCoin">
          <div className="priceImage">
            <img className="bitImage" src="assets/images/bitcoin.png" />
            <h1 className="price">${useCrypt.btcPrice}</h1>
          </div>
          <div className="inputFields">
            <form onSubmit={handleSubmit}>
              <input id="amount-btc" onChange={handleChange} className="Buy" value={transaction.btcBuy}name="btc" placeholder="Buy Amount (Dollars)" />
              <button className="buyButton" id="buybtc">Buy</button>
            </form>
            <form onSubmit={handleSubmit}>  
              <input id="amount-btc2" onChange={handleChange} className="Sell" value={transaction.btcSell}name="btc" placeholder="Sell Amount (Coins)" />
              <button className="sellButton" id="sellbtc">Sell</button>
            </form>
          </div>
        </div>
        <div id="coin" className="liteCoin">
          <div className="priceImage">
            <img className="bitImage" src="assets/images/litecoin.png" />
            <h1 className="price">${useCrypt.ltcPrice}</h1>
          </div>
          <div className="inputFields">
            <form onSubmit={handleSubmit}>
              <input id="amount-ltc" onChange={handleChange} value={transaction.ltcBuy} className="Buy" name="ltc" placeholder="Buy Amount (Dollars)" />
              <button className="buyButton" id="buyLTC">Buy</button>
            </form>
            <form onSubmit={handleSubmit}>
              <input id="amount-ltc2" onChange={handleChange} value={transaction.ltcSell}className="Sell" name="ltc" placeholder="Sell Amount (Coins)" />
              <button className="sellButton" id="sellLTC">Sell</button>
            </form>
          </div>
        </div>
        <div id="coin" className="ethereumCoin">
          <div className="priceImage">
            <img className="bitImage" src="assets/images/ethereum.png" />
            <h1 className="price">${useCrypt.ethPrice}</h1>
          </div>
          <div className="inputFields">
            <form onSubmit={handleSubmit}>
              <input id="amount-eth" onChange={handleChange} className="Buy" value={transaction.ethBuy}name="eth" placeholder="Buy Amount (Dollars)" />
              <button className="buyButton" id="buyEther">Buy</button>
            </form>
            <form onSubmit={handleSubmit}>
              <input id="amount-eth2" onChange={handleChange} className="Sell" name="eth" value={transaction.ethSell} placeholder="Sell Amount (Coins)" />
              <button className="sellButton" id="sellEther">Sell</button>
            </form>
          </div>
        </div>
        <div id="coin" className="rippleCoin">
          <div className="priceImage">
            <img className="bitImage" src="assets/images/ripple.png" />
            <h1 className="price">${useCrypt.xrpPrice}</h1>
          </div>
          <div className="inputFields">
            <form onSubmit={handleSubmit}>
              <input type="text" id="amount-xrp" className="Buy" name="xrp" value={transaction.xrpBuy} placeholder="Buy Amount (Dollars)" onChange={handleChange}/>
              <button type="submit" className="buyButton" id="buyXRP">Buy</button>
            </form>
            <form onSubmit={handleSubmit}>
              <input type="text" id="amount-xrp2" className="Sell" name="xrp" value={transaction.xrpSell}placeholder="Sell Amount (Coins)" onChange={handleChange}/>
              <button type="submit" className="sellButton" id="sellXRP">Sell</button>
            </form>
          </div>
        </div>
      </div>
    );
}

