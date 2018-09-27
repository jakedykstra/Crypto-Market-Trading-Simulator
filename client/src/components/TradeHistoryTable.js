import React, { Component } from 'react';
import TableRow from './TableRow.js';
import './styles.css';

export default class TradeHistoryTable extends React.Component {
  constructor(props){
    super(props)
  }

  rowItems(){
    // console.log(this.props.tradeHistory);
    // console.log('-----------------------------');
    var tradeHistoryArr = this.props.tradeHistory.reverse();
    // console.log(tradeHistoryArr);
    return tradeHistoryArr.map(tradeRow => {
      return (
        <TableRow
          tradeHistory={this.props.tradeHistory}
          key={tradeRow.id}
          tradeRow={tradeRow}
        />
      );
    })
  }   

  render() {
    return(
    <div>
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
          {this.rowItems()}
          </tbody>
        </table>
      </div>
    );
  }
}

