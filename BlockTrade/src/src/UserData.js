import React, { Component } from 'react';

// displays the user's investments in ea crypto
class Investments extends React.Component {
  render() {
    const investment = this.props.investment;
    return(
      <table>
        <tr>
          <th>{investment.bitcoin}</th>
          <th>{investment.litecoin}</th>
          <th>{investment.ethereum}</th>
          <th>{investment.ripple}</th>
        </tr>
      </table>
    );
  }
}

// displays the user's cash and net funds
class Balance extends React.Component {
  render() {
    const balance = this.props.balance;
    return(
      <table>
        <tr>
          <th>{balance.cash}</th>
          <th>{balance.net}</th>
        </tr>
      </table>
    );
  }
};

// displays the user's balance, investments, and trade history as one html element
class Account extends React.Component {
  render() {
    return(
      <div>
        <Balance />
        <Investments />
      </div>
    );
  }
}

// takes in the trade and account modules ands sets the data that they will use
class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:[],
      
    }
  fetch('http://localhost:3000/api/user') 
      .then(res => {
        const user = res.json()
        this.setState({user});
  })  
  }
  render() {
    return( 
      <Account 
        category={this.state.user.category}
        balance={this.state.user.balance}
      />
    )
  };
}

module.exports(UserData);
