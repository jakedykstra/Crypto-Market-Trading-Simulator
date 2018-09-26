import React,{Component} from 'react'
import Buy from './Buy';
import Sell from './Sell';

class TradeEthereum extends React.Component {
    render(){
        fetch('http://localhost:3000/api/user/updatePortfolio', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                buy: '',
                sell: '',
  })
})
        return(
            <div>
                <Buy />
                <Sell />
            </div>
        )
    }
};

module.exports(TradeEthereum);
