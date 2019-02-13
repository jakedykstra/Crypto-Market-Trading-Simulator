import React from 'react';
import TradeHistoryTable from './TradeHistoryTable';
import useTradeHistory from '../../customHooks/useTradeHistory'
import axios from 'axios';

export default function TradeHist() {
 const tradeHistory = useTradeHistory();
 console.log(tradeHistory);

  const newTrade = (coinPrice, usdAmount, coinAmount, tradeType, cryptoType) => {
    var newTrade = {
      coinPrice,
      cryptoType,
      coinAmount,
      usdAmount,
      tradeType
    }
  
    const tradeHistData = () => {
      axios.post("/api/tradeHistory", newTrade).then(function(data) {
        tradeHistory();
        return (data); 
      })
      .catch(function (error) {
        console.log(error);
      });
    };
  }

  return (
    <div id="tradeHistory">
            {TradeHistoryTable(tradeHistory)}
    </div>
  )
}
