import React,{Component} from 'react'

class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleSubmit = this.handleSumbit.bind(this);
    }
    handleSubmit(event) {
        const target = event.target;
    }
    
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Amount:
                
      <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
       
      )
    };

class Sell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount:''
        }
        
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);

        };
    
    handleSubmit(event) {
        event.preventDefault();
        const target = event.target;
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
              <label>
                Amount:
                
      <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
        )

    }
    
}

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
