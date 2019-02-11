import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';

export default useCurrentPortfolio = (userId) => {
  const [userPort, setUserPort] = useState(0);

  const getPort = async() => {
    const portInDb; 
    await axios.get(`api/user/${userId}`).then((dbData)=> {
     return portInDb = dbData.data;
    })
    return portInDb;
  }

  useEffect(() => {
    const portInDb = getPort();
    portfolioToState = {
    userId: portInDb.UserId,
    totalNet: parseFloat(portInDb.totalNet.toFixed(2)),
    usd: parseFloat(portInDb.usd.toFixed(2)),
    btc: parseFloat(portInDb.btc.toFixed(6)),
    btc_val: parseFloat(portInDb.btc_val.toFixed(2)),
    eth: parseFloat(portInDb.eth.toFixed(6)),
    eth_val: parseFloat(portInDb.eth_val.toFixed(2)),
    xrp: parseFloat(portInDb.xrp.toFixed(6)),
    xrp_val: parseFloat(portInDb.xrp_val.toFixed(2)),
    ltc: parseFloat(portInDb.ltc.toFixed(6)),
    ltc_val: parseFloat(portInDb.ltc_val.toFixed(2))
    }
    setUserPort(portfolioToState)
  }, userPort)

  return userPort;
}