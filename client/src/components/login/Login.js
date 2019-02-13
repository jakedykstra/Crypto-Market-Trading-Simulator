import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import DelayLink from '../helper/Delay';

export default function Login(props){
    
   const [info, setInfo] = useState({
      email: '',
      password: ''
    });

  const signin = () => {
    axios.post("/api/login", {
      email: info.email,
      password: info.password
    }).then((data) =>{
      console.log(data);
      getUser();
    })
  }

  const getUser = () => {
    axios.get("/api/dashboard").then(function(user){
    })
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    setInfo({...info, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    signin(info);
    setInfo({
      email: '',
      password: ''
    })
  }

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
                <form id="loginform" name="signin" method="post">
                  <div className="email">
                    <label className="label" htmlFor="email" name="uname">Email Address:</label>
                    <input className="text" name="email" type="email" onChange={handleChange} value={info.email} />
                  </div>
                  <br></br>
                  <div className="pass">
                    <label className="label" htmlFor="password">Password:</label>
                    <input className="text" name="password" type="password" onChange={handleChange} />
                  </div>
                  <div className="button">
                      <button className="btn-style" type="submit" onClick={(e) => handleSubmit(e)} defaultValue="Sign In"><DelayLink className="linkstyle" to="/dashboard">Submit</DelayLink></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
  };