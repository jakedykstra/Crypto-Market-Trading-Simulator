import React, { Component } from 'react';
import moment from 'moment';
import './Graph.css';
import LineChart from './LineChart';
import ToolTip from './ToolTip';
import InfoBox from './InfoBox';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      data: null,
      hoverLoc: null,
      activePoint: null,
      coin: 'BTC',
      currentCoin: 'Bitcoin',
      lastCoin: ''
    }
  }
  handleChartHover(hoverLoc, activePoint){
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    })
  }

  coinChange(coin){
    console.log(coin);
    this.setState({
      coin: coin
    })
    this.currentCoin();
  }

  currentCoin(){
    switch (this.state.coin) {
      case 'BTC':
        this.setState({currentCoin : 'Bitcoin'})
        break;
      case 'ETH':
        this.setState({currentCoin : 'Ethereum'})
        break;
      case 'XRP':
        this.setState({currentCoin : 'Ripple'})
        break;
      case 'LTC':
        this.setState({currentCoin : 'LiteCoin'})
        break;
    
      default:
        break;
    }
  }

  getData(){
    if(this.state.coin == this.state.lastCoin){
      return
    } else {
    const url = 'https://min-api.cryptocompare.com/data/histoday?fsym=' + this.state.coin + '&tsym=USD&limit=90';

      fetch(url).then( data => data.json())
        .then((cryptoData) => {
          console.log(cryptoData.Data);
          const sortedData = [];
          let count = 0;
          let addDate;
          for (var i of cryptoData.Data){
            // console.log(i);
            addDate = new Date(i.time * 1000);
            sortedData.push({
              d: moment(addDate).format('MMM DD'),
              p: i.close.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
              x: count, //previous days
              y: i.close // numerical price
            });
            count++;
          }
          console.log("sortedData is here ========");
          console.log(sortedData);
          this.setState({
            lastCoin: this.state.coin,
            data: sortedData,
            fetchingData: false
          })
          this.updateBox()
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }

  updateBox(){
      return (
        <InfoBox data={this.state.data} coin={this.state.coin}
        />
      )
  }


  render() {
    this.getData();
    return (

      <div className='container graphContainer'>
        <div className='row'>
          <h1>90 Day {this.state.currentCoin} Price Chart</h1>
        </div>
        <div className='row'>
          { !this.state.fetchingData ?
          this.updateBox()
          : null }
        </div>
        <div className='row'>
          <div className='popup'>
            {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
          </div>
        </div>
        <div className='row'>
          <div className='chart'>
            { !this.state.fetchingData ?
              <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
              : null }
          </div>
        </div>
        <div className='row'>
          <div className ='coins row'>
                <button onClick={this.coinChange.bind(this, 'BTC')}>Bitcoin</button>
                <button onClick={() => this.coinChange('ETH')}>Ethereum</button>
                <button onClick={this.coinChange.bind(this, 'XRP')}>Ripple</button>
                <button onClick={this.coinChange.bind(this, 'LTC')}>LiteCoin</button>
            </div>
        </div>
      </div>

    );
  }
}

export default Graph;
