import React, { Component } from 'react';
import './App.css';
import './src/amountinput.js';

class TradeCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan='2'>
        {category}
        </th>
      </tr>
    );
  }
}

class TradeRow extends React.Component {
  render() {
    const trade = this.props.trade;
    return (
    <tr>
      <td>{trade.transaction}</td>
      <td>{trade.currency}</td>
      <td>{trade.price}</td>
      <td>{trade.quantity}</td>
      <td>{trade.usd}</td>
      <td>{trade.type}</td>
    </tr>
  )
}
}

class TradeHistoryTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.trades.forEach((trade) => {
      if (trades.category !== lastCategory) {
        rows.push(
          <TradeCategoryRow
            category={trade.category}
            key={trade.category} />
        );
      }
      rows.push(
        <TradeRow
          trade={trade}
          key={trade.name} />
      );
      lastCategory = trade.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Currency</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Fiat (USD)</th>
            <th>Trade Type</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class Investments extends React.Component {
  render() {
    const investment = this.props.investment;
    return(
      <table>
        <tr>
          <th>{investment.bitcoin}</th>
          <th>{investment.litecoin}</th>
          <th>{investment.ethereum}</th>
          <th>{investment.ripple}</th>
        </tr>
      </table>
    );
  }
}

class Balance extends React.Component {
  render() {
    const balance = this.props.balance;
    return(
      <table>
        <tr>
          <th>{balance.cash}</th>
          <th>{balance.net}</th>
        </tr>
      </table>
    );
  }
};

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

class Trade extends React.Component {
  render() {
    return(
      <TradeInputTable />
    )
  }
};

class Account extends React.Component {
  render() {
    return(
      <div>
        <Balance />
        <Investments />
        <TradeHistoryTable />
      </div>
    )
  }
};

class UserData extends Component {
  
  render() {
    return( 
    <div>
      <Trade 
    
      />
      <Account 
      
      />
    </div>
    )
  };
}

module.exports(UserData)
