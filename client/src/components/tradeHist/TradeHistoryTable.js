import React from 'react';
import TableRow from './TableRow.js';

export default function TradeHistoryTable (props) {

  const rowItems = (props) => {
    if (!props) {
      return;
    }
    let tradeHistoryArr = props.reverse();
    return tradeHistoryArr.map(tradeRow => {
      return (
        TableRow(tradeRow)
      );
    })
  }   

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
          {rowItems(props)}
          </tbody>
        </table>
      </div>
   );
}

