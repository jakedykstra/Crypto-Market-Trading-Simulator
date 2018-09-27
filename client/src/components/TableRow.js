import React, { Component } from 'react';
import './styles.css';

export default class TableRow extends React.Component {
  constructor(props){
    super(props)
  }

    render(){
      return (
        <tr>
          <td>{this.props.tradeRow.id}</td>
          <td>{this.props.tradeRow.cryptoType}</td>
          <td>${this.props.tradeRow.coinPrice}</td>
          <td>{this.props.tradeRow.coinAmount}</td>
          <td>${this.props.tradeRow.usdAmount}</td>
          <td>{this.props.tradeRow.tradeType}</td>
        </tr>
      );
  };
}

