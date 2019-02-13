import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useTradeHistory(tradeHistUpdates) {
  const [tradeHistory, setTradeHistory] = useState();

  // getting original tradeHistory data to populate
  useEffect(() => { 
    axios.get("/api/tradeHistory").then((tradeTransactions) => {
      setTradeHistory(tradeTransactions.data)
    });
  });
  
  return tradeHistory;
}