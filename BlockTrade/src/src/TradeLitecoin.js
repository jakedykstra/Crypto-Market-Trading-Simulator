import React,{Component} from 'react'


class TradeLiteCoin extends React.Component {
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

module.exports(TradeLiteCoin);
