import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useCurrentCoinCurrency() {
  const [coinCurrency, setCoinCurrency] = useState(0);

  useEffect(() => {
    (async => {
      console.log("calling");
      const response =  axios.get(
      "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC&tsyms=USD").then((data) => {
        setCoinCurrency({
          ethPrice: response.data.RAW.ETH.USD.PRICE,
          ltcPrice: response.data.RAW.LTC.USD.PRICE,
          btcPrice: response.data.RAW.BTC.USD.PRICE,
          xrpPrice: response.data.RAW.XRP.USD.PRICE
        })
      })
      }
    )();
  })
  
  return coinCurrency
}