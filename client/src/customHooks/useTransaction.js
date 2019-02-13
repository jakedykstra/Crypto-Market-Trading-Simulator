import React, { useState, useEffect } from 'react';

const starterTrans = {
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
  const [transaction, setTransaction] = useState(starterTrans);

  useEffect(() => {
    setTransaction({...transaction, props});
    console.log(transaction);
    
  }, props)

  return transaction;
}
