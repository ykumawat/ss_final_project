import React from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import LoginForm from './forms/LoginForm'
import SignUpForm from './forms/SignUpForm'

class Home extends React.Component {

  render(){
      return (
        <div style={{textAlign: "center"}}>
          <img src="https://i.imgur.com/x8nJoyZ.png"/>
          <h2>Welcome to S&S</h2>
          <Link to="/login" component={LoginForm}>Login</Link>
          <br/>
          <Link to="/signup" component={SignUpForm}>Sign Up</Link>
        </div>
      )
    }
  }


export default Home
