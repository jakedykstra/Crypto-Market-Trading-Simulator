import React, { Component } from 'react';
import './BlockTrade.css';
import UserData from './src/UserData';

import TradeHistoryTable from './src/TradeHistoryTable';

class BlockTrade extends React.Component {
  render() {
    return(
    
    <div>
      <UserData />
    
      <TradeHistoryTable />
    </div>
    )
  }
};

module.exports(BlockTrade);
