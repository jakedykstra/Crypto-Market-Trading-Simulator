import React, { Component } from 'react';
import './BlockTrade.css';
import UserData from './src/UserData';
import Trade from './src/Trades';
import TradeHistoryTable from './src/TradeHistoryTable';

class BlockTrade extends React.Component {
  render() {
    return(
    
    <div>
      <UserData />
    
   
      <Trade />
    
    
      <TradeHistoryTable />
    </div>
    )
  }
};

module.exports(BlockTrade);
