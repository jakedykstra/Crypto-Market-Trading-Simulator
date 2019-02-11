import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCurrentCoinCurrency() {
  const [coinCurrency, setCoinCurrency] = useState(0);

  useEffect(() => {
    axios.get(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC&tsyms=USD").then((data) => {
        setCoinCurrency({
          btcPrice: data.data.RAW.BTC.USD.PRICE,
          ethPrice: data.data.RAW.ETH.USD.PRICE,
          ltcPrice: data.data.RAW.LTC.USD.PRICE,
          xrpPrice: data.data.RAW.XRP.USD.PRICE
        })
      }
    )
    .catch((error)=>{
      console.log(error);
    });
  })
  
  return coinCurrency
}