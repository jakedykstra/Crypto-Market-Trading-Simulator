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
      coin: 'BTC'
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
  }

  componentDidMount(){
    const getData = () => {
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
          // console.log("sortedData is here ========" + sortedData);
          this.setState({
            data: sortedData,
            fetchingData: false
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getData();
  }
  render() {
    return (

      <div className='container graphContainer'>
        <div className='row'>
          <h1>90 Day Bitcoin Price Chart</h1>
        </div>
        <div className='row'>
          { !this.state.fetchingData ?
          <InfoBox data={this.state.data} />
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
          <div className ='coins row'>
              <button onClick={this.coinChange.bind(this, 'BTC')}>Bitcoin</button>
              <button onClick={() => this.coinChange('ETH')}>Ethereum</button>
              <button onClick={this.coinChange.bind(this, 'XRP')}>Ripple</button>
              <button onClick={this.coinChange.bind(this, 'LTC')}>Litecoin {this.state.coin}</button>
          </div>
        </div>
      </div>

    );
  }
}

export default Graph;
