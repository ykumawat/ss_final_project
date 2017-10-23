import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Redirect } from 'react-router-dom'
import LoginForm from './forms/LoginForm'
import SignUpForm from './forms/SignUpForm'
import { Modal, Button } from 'semantic-ui-react'

class Home extends React.Component {

  render(){
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/me"/>
    } else {
      return (
        <div style={{textAlign: "center"}}>
          <img src="https://i.imgur.com/x8nJoyZ.png"/>
          <h2>Welcome to S&S</h2>
          <Modal trigger={<Button>Login</Button>}>
            <Modal.Content>
              <LoginForm />
            </Modal.Content>
          </Modal>
            <Modal trigger={<Button>Sign Up</Button>}>
              <Modal.Content>
                <SignUpForm />
              </Modal.Content>
            </Modal>
        </div>
      )
    }
  }
}


export default Home
