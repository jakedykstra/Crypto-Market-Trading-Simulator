import React, { useState, useEffect } from 'react';

starterTrans = {
  btcBuy: '',
  btcSell: '',
  ethBuy: '',
  ethSell: '',
  ltcBuy: '',
  ltcSell: '',
  xrpBuy: '',
  xrpSell: '',
  type: '',
  name: '',
  value: '',
};

export default function useTransaction(props) {
  [transaction, setTransaction] = useState(starterTrans)

  setTransaction({...transaction, props})

  return transaction;
}
