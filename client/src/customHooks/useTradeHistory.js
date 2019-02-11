import React, { Component, useState, useEffect } from 'react';
import TradeHistoryTable from './TradeHistoryTable';
import axios from 'axios';

export default function useTradeHistory(tradeHistUpdates) {
  [tradeHistory, setTradeHistory] = useState();

  // getting original tradeHistory data to populate
  useEffect(() => { 
    (async = () => 
      { await axios.get("/api/tradeHistory").then((tradeTransactions) => {
      setTradeHistory(tradeTransactions.data)
    });
    });
  })
  
  return tradeHistory;
}