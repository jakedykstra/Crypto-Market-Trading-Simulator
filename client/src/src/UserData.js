import React, { Component } from 'react';
import './styles.css';

export default class UserData extends React.Component {
  constructor(props) {
    super(props);

    }
  render() {

    return( 
      <div id="profileContainers">
        <div id="accountContainer">
          <div className="titleTab">
            <h1>Account</h1>
          </div>
          <div className="balances">
            <h1 id="cash">Current Cash Balance: ${this.props.userPortfolio.usd}
            </h1>
            <h1 id="net">Portfolio Networth: ${this.props.userPortfolio.totalNet}
            </h1>
          </div>
          <div className="titleTab">
            <h1>Investments</h1>
          </div>
          <div id="investmentContainer">
            <div className="bitInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/bitcoin.png" />
              <h1 className="bitcoin">{this.props.userPortfolio.btc} BTC / ${this.props.userPortfolio.btc_val}</h1>
            </div>
            <div className="liteInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/litecoin.png" />
              <h1 className="litecoin">{this.props.userPortfolio.ltc} LTC / ${this.props.userPortfolio.ltc_val}</h1>
            </div>
            <div className="ethereumInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/ethereum.png" />
              <h1 className="ethereum">{this.props.userPortfolio.eth} ETH / ${this.props.userPortfolio.etc_val}</h1>
            </div>
            <div className="rippleInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/ripple.png" />
              <h1 className="ripple">{this.props.userPortfolio.xrp} XRP / ${this.props.userPortfolio.xrp_val}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  };
}


