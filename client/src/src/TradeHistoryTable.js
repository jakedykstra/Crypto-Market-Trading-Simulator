import React, { Component } from 'react';
import TableRow from './TableRow.js';
import './styles.css';

export default class TradeHistoryTable extends React.Component {
  constructor(props){
    super(props)
  }

  rowItems(){
    this.props.tradeHistory.map(row => {
    return (
      <TableRow
        key={row.id}
        row={row}
      />
    );
  });
}

  render() {
    return(
    <div id="tradeHistory">
        <div className="titleTab">
          <h1>Trade History</h1>
        </div>
        <table className="history-table">
          <thead>
            <tr>
              <th>Transaction</th>
              <th>Crypto Currency</th>
              <th>Coin Price</th>
              <th>Coin Amount</th>
              <th>USD Amount</th>
              <th>Trade Type</th>
            </tr>
          </thead>
          <tbody className="body">
          {this.rowItems}
          </tbody>
        </table>
      </div>
    );
  }
}

