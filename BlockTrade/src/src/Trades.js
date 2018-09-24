import React, {Component} from 'react';

// this module displays the trade input
class TradeInput extends React.Component{
    render() {
      const crypto = this.props.crypto;
      return(
      <form onSubmit={crypto}>
        <label>
          Buy Amount
        </label>
          <input
            name="buyAmount"
            type="number"
  
          />    
      </form>
      )
    };
  }
  
  // this module takes in the input box to create a table that displays a buy and sell input for each type of crypto
  class TradeInputTable extends React.Component{
    render() {
      const inputs = [];
      let lastCrypto = null;
  
      this.props.cryptos.forEach((crypto) => {
        if (trades.inputs !== lastCrypto) {
          inputs.push(
            <TradeInput
              trade={crypto}
              key={crypto} />
          );
        }
        inputs.push(
          <TradeInput
          trade={crypto}
          key={crypto} />
        );
      })
        return(
          <div>{inputs}</div>
        );
    }
  };
  
  // this module displays the entire trade section
  class Trade extends React.Component {
    render() {
      return(
        <TradeInputTable />
      );
    }
  };

module.exports(Trade);