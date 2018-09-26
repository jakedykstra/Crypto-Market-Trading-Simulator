import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import '../styles.css';

export default class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 signup(){
    console.log(this.state);
    axios.post("/api/login", {
      email: this.state.email,
      password: this.state.password
    }).then((data) =>{
      console.log(data);
      this.getUser();
    })
  }

  getUser(){
    axios.get("/api/dashboard").then(function(user){
      var userId;
      console.log(user);
      console.log(user.data.id);
    })

  }

  handleChange(e){
    console.log(e.target.value)
    console.log(e.target.name)
    this.setState({[e.target.name] : e.target.value})
  }

  handleSubmit(e){
    console.log(this.state)
    this.signup(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
            <div>
            <div id="headWrap" className="titleTab">
              <div>
                <img src="assets/images/btlogo3.png" />
                <h1 id="title">
                  Block Trade
                </h1>
              </div>
            </div>
            <div id="text-body">
              <div id="loginRegister">
                <h1>
                  Login
                </h1>
                <form id="signup" name="signup" method="post">
                  <label htmlFor="email" name="uname">Email Address</label>
                  <input className="text" name="email" type="email" onChange={this.handleChange} value={this.state.email} />
                  <label htmlFor="password">Password</label>
                  <input name="password" type="password" onChange={this.handleChange} />
                    <button className="btn" type="submit" onClick={(e) => this.handleSubmit(e)} defaultValue="Sign In"><Link to="/dashboard">Submit</Link></button>
                </form>
              </div>
            </div>
          </div>
        );
    };
  };