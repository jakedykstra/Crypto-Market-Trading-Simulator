import React, { Component } from 'react';
import moment from 'moment';
import './InfoBox.css';

class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: null,
      monthChangeD: null,
      monthChangeP: null,
      updatedAt: null,
      lastCoin: ''
    }
  }

  getData(){
    if(this.props.coin == this.state.lastCoin){
      return
    } else {
      const {data} = this.props;
      console.log(data);
      const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,LTC&tsyms=USD';

      fetch(url).then(r => r.json())
        .then((coinData) => {
          console.log(coinData);         
          const price = coinData.RAW[this.props.coin].USD.PRICE;
          const change = price - data[60].y;
          const changeP = (price - data[60].y) / data[0].y * 100;
          console.log("PRICEEEEEE");
          console.log(price);

          this.setState({
            currentPrice: coinData.RAW[this.props.coin].USD.PRICE,
            monthChangeD: change.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
            monthChangeP: changeP.toFixed(2) + '%',
            updatedAt: Date.now(),
            lastCoin: this.props.coin
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
  
  componentDidMount(){
    this.getData();
    this.refresh = setInterval(() => this.getData(), 90000);
  }

  componentDidUpdate(){
    setTimeout(() => this.getData(), 1500);
  }

  componentWillUnmount(){
    clearInterval(this.refresh);
  }

  render(){
    return (
      <div id="data-container">
        { this.state.currentPrice ?
          <div id="left" className='box'>
            <div className="heading">{this.state.currentPrice.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' })}</div>
            <div className="subtext">{'Updated ' + moment(this.state.updatedAt ).fromNow()}</div>
          </div>
        : null}
        { this.state.currentPrice ?
          <div id="middle" className='box'>
            <div className="heading">{this.state.monthChangeD}</div>
            <div className="subtext">Change Since Last Month (USD)</div>
          </div>
        : null}
          <div id="right" className='box'>
            <div className="heading">{this.state.monthChangeP}</div>
            <div className="subtext">Change Since Last Month (%)</div>
          </div>

      </div>
    );
  }
}

export default InfoBox;
