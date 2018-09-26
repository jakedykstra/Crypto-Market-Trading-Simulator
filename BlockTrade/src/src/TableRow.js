import React, { Component } from 'react';


const TableRow = ({ row }) => {
  return (
      <td>{row.id}</td>
      <td>{row.cryptoType}</td>
      <td>${row.coinPrice}</td>
      <td>{row.coinAmount}</td>
      <td>${row.usdAmount}</td>
      <td>{row.tradeType}</td>
  );
};

export default TableRow;