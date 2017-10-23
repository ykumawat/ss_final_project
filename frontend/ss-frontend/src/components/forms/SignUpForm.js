import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as UserActions from '../../actions/user'
import LoginForm from './LoginForm'
import { Form, Button } from 'semantic-ui-react'

class SignUpForm extends React.Component {

  constructor() {
    super()
    this.state = {
      emailInput: "",
      passwordInput: "",
      nameInput: "",
      urlInput: "",
      user: {}
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.emailInput !== "" && this.state.passwordInput !== "") {
      this.props.signupUser(this.state.emailInput, this.state.passwordInput, this.state.urlInput, this.state.nameInput)
    }
  }

  handleNameChange = (event) => {
    this.setState({
      nameInput: event.target.value
    })
  }

  handleURLChange = (event) => {
    this.setState({
      urlInput: event.target.value
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      emailInput: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      passwordInput: event.target.value
    })
  }

  render(){
    if (localStorage.getItem('jwtToken')) {
      return <Redirect to="/me"/>
    } else {
      return(
        <div align="center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Input type="text" value={this.state.nameInput} onChange={this.handleNameChange} placeholder="name" />
            <Form.Input type="text" value={this.state.urlInput} onChange={this.handleURLChange} placeholder="profile image" />
            <Form.Input type="text" value={this.state.emailInput} onChange={this.handleEmailChange} placeholder="email" />
            <Form.Input type="password" value={this.state.passwordInput} onChange={this.handlePasswordChange} placeholder="password"/>
            <Form.Button>Submit</Form.Button>
          </Form>
          <div >
            <h4>Already a user?
              <Link to="/login" component={SignUpForm}> Log In Here</Link>
            </h4>
          </div>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUpForm)
