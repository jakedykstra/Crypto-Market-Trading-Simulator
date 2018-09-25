import React, { Component } from 'react';


const typeNames = {
    b: 'Bitcoin',
    l: 'Litecoin',
    e: 'Ethereum',
    r: 'Ripple'
};

class BuyAndSellTextInput extends Component{
    constructor(props) {
        super(props);
        this.state = {
            buyAmount: '',
            sellAmount: ''
        };

        this.handleInputChange = 
    this.handleInputChange.bind(this);

    }
    
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    
    handleInputChange(b){
        this.setState({})
    }

    handleInputChange(l){

    }

    handleInputChange(e){

    }

    handleInputChange(r){

    }




    render() {
        return (
            <form>
            <label>
                Buy Amount
                <input
                    name="buyAmount"
                    type="number"
                    value={this.state.buyAmount}
                    onChange={this.handleInputChange} />    
            </label>
            <br />
            <label>
                Sell Amount
                <input
                    name="sellAmount"
                    type="number"
                    value={this.state.sellAmount}
                    onChange={this.handleInputChange} />
            </label>
        </form>
        );
    }
};

module.exports = BuyAndSellTextInput;