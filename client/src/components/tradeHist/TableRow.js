import React from 'react';

export default function TableRow(props) {
      return (
        <tr>
          <td>{tradeRow.id}</td>
          <td>{tradeRow.cryptoType}</td>
          <td>${tradeRow.coinPrice}</td>
          <td>{tradeRow.coinAmount}</td>
          <td>${tradeRow.usdAmount}</td>
          <td>{tradeRow.tradeType}</td>
        </tr>
      );
};

