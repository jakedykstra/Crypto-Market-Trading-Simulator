import React, { Component } from 'react';

// // displays the user's investments in ea crypto
// class Investments extends React.Component {
//   render() {
//     const investment = this.props.investment;
//     return(
//       <table>
//         <tr>
//           <th>{investment.bitcoin}</th>
//           <th>{investment.litecoin}</th>
//           <th>{investment.ethereum}</th>
//           <th>{investment.ripple}</th>
//         </tr>
//       </table>
//     );
//   }
// }

// // displays the user's cash and net funds
// class Balance extends React.Component {
//   render() {
//     const balance = this.props.balance;
//     return(
//       <table>
//         <tr>
//           <th>{balance.cash}</th>
//           <th>{balance.net}</th>
//         </tr>
//       </table>
//     );
//   }
// };

// // displays the user's balance, investments, and trade history as one html element
// class Account extends React.Component {
//   render() {
//     return(
//       <div>
//         <Balance />
//         <Investments />
//       </div>
//     );
//   }
// }

// takes in the trade and account modules ands sets the data that they will use
export default class UserData extends React.Component {
  constructor(props) {
    super(props);
    
//     initalUserPortfolio = this.props.intialUserPortfolio;
//     userPortfolio = this.props.userPortfolio
//       // updates portfolio with new data based on recent buy. Function is called after buy/sell functionality



    }
  render() {

    return( 
      <div id="profileContainers">
        <div id="accountContainer">
          <div className="titleTab">
            <h1>Account</h1>
          </div>
          <div className="balances">
            <h1 id="cash">Current Cash Balance:
              <span id="amount">${this.props.userPortfolio.usd}
            </h1>
            <h1 id="net">Portfolio Networth:
              <span id="amount">${this.props.userPortfolio.totalNet}
              </span></h1>
          </div>
          <div className="titleTab">
            <h1>Investments</h1>
          </div>
          <div id="investmentContainer">
            <div className="bitInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/bitcoin.png" />
              <h1 className="bitcoin"><span id="personBTC">{this.props.userPortfolio.btc} BTC / ${this.props.userPortfolio.btc_val}</h1>
            </div>
            <div className="liteInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/litecoin.png" />
              <h1 className="litecoin"><span id="personLTC">{this.props.userPortfolio.ltc LTC / ${this.props.userPortfolio.ltc_val}</h1>
            </div>
            <div className="ethereumInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/ethereum.png" />
              <h1 className="ethereum"><span id="personEther">{this.props.userPortfolio.eth} ETH / ${this.props.userPortfolio.etc_val}</h1>
            </div>
            <div className="rippleInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/ripple.png" />
              <h1 className="ripple"><span id="personRipple">{this.props.userPortfolio.xrp} XRP / ${this.props.userPortfolio.xrp_val}</h1>
            </div>
          </div>
        </div>
      </div>
//       <Account 
//         category={this.state.user.category}
//         balance={this.state.user.balance}
//       />
    )
  };
}


