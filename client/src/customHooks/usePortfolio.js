import React, { Component, useState, useEffect } from 'react';
import useId from './useId';
import axios from 'axios';

export default function useCurrentPortfolio() {
  const [userPort, setUserPort] = useState(0);
  const [userId, updateUserId] = useId(); 



  useEffect(() => {
    let portInDb = (async() => {
      await axios.get(`api/user/${userId}`);
    })();
    console.log(portInDb);
    let portfolioToState
    if (!portInDb) {
      portfolioToState = {};
    } else {
      portfolioToState = {
        userId: userId,
        totalNet: parseFloat(portInDb.data.totalNet.toFixed(2)),
        usd: parseFloat(portInDb.data.usd.toFixed(2)),
        btc: parseFloat(portInDb.data.btc.toFixed(6)),
        btc_val: parseFloat(portInDb.data.btc_val.toFixed(2)),
        eth: parseFloat(portInDb.data.eth.toFixed(6)),
        eth_val: parseFloat(portInDb.data.eth_val.toFixed(2)),
        xrp: parseFloat(portInDb.data.xrp.toFixed(6)),
        xrp_val: parseFloat(portInDb.data.xrp_val.toFixed(2)),
        ltc: parseFloat(portInDb.data.ltc.toFixed(6)),
        ltc_val: parseFloat(portInDb.data.ltc_val.toFixed(2))
        }
    }
    setUserPort(portfolioToState)
  }, userPort)

  return userPort;
}