import React, { Component } from 'react';

// this is the category row of the trade history module
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

// this specifies what populates each row of the trade history mod
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
    );
  }
}

// takes in the categories with the TradeCategoryRow and the rows of TradeRow to create the TradeHistoryTable
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

// this module takes in the trade and account modules ands sets the data that they will use
class SiteHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history:[]
    }
      fetch('http://localhost:3000/api/tradehistory')
        .then(res => {
          const history = res.json()
          this.setState({history});
        })    
      }
  render() {
    return( 
      <TradeHistoryTable
        trade={this.state.history}
      />
    )
  };
}

module.exports(SiteHistory);
