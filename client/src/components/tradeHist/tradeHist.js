import React from 'react';
import TradeHistoryTable from './TradeHistoryTable';
import useTradeHistory from '../customHooks/useTradeHistory'
import axios from 'axios';

export default function TradeHist() {
 const tradeHistory = useTradeHistory();

  newTrade = (coinPrice, usdAmount, coinAmount, tradeType, cryptoType) => {
    var newTrade = {
      coinPrice: coinPrice,
      cryptoType: cryptoType,
      coinAmount: coinAmount,
      usdAmount: usdAmount,
      tradeType: tradeType
    }
    
    tradeHistData = async = () => {
      await axios.post("/api/tradeHistory", newTrade).then(function(data) {
        return (data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  return (
    <div id="tradeHistory">
            {TradeHistoryTable(tradeHistory)}
    </div>
  )
}
