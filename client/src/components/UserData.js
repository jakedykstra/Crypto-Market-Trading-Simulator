import React from 'react';
import usePort from '../customHooks/usePortfolio';

export default function UserData(props){
    const userPort = usePort();
    return( 
        <div id="accountContainer">
          <div className="titleTab">
            <h1>Account</h1>
          </div>
          <div className="balances">
            <h1 id="cash">Current Cash Balance: ${userPort.usd}
            </h1>
            <h1 id="net">Portfolio Networth: ${userPort.totalNet}
            </h1>
          </div>
          <div className="titleTab">
            <h1>Investments</h1>
          </div>
          <div id="investmentContainer">
            <div className="bitInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/bitcoin.png" />
              <h1 className="bitcoin">{userPort.btc} BTC / ${userPort.btc_val}</h1>
            </div>
            <div className="liteInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/litecoin.png" />
              <h1 className="litecoin">{userPort.ltc} LTC / ${userPort.ltc_val}</h1>
            </div>
            <div className="ethereumInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/ethereum.png" />
              <h1 className="ethereum">{userPort.eth} ETH / ${userPort.eth_val}</h1>
            </div>
            <div className="rippleInvestment" id="coinInvestment">
              <img className="bitImage" src="assets/images/ripple.png" />
              <h1 className="ripple">{userPort.xrp} XRP / ${userPort.xrp_val}</h1>
            </div>
          </div>
        </div>
    )
  };


