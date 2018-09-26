import React, { Component } from 'react';
import './styles.css';

const TableRow = ({ row }) => {
  return (
    <tr>
      <td>{row.id}</td>
      <td>{row.cryptoType}</td>
      <td>${row.coinPrice}</td>
      <td>{row.coinAmount}</td>
      <td>${row.usdAmount}</td>
      <td>{row.tradeType}</td>
    </tr>
  );
};

export default TableRow;