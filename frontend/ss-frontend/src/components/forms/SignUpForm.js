import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import ToggleDisplay from 'react-toggle-display'
import * as UserActions from '../../actions/user'
import LoginForm from './LoginForm'

class SignUpForm extends React.Component {

  constructor() {
    super()
    this.state = {
      emailInput: "",
      passwordInput: "",
      user: {}
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.emailInput !== "" && this.state.passwordInput !== "") {
      this.setState({
        user: {
          email: this.state.emailInput, password: this.state.passwordInput
        }
      })
    this.props.signupUser(this.state.user)
    }
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
      return <Redirect to="/home"/>
    } else {
      return(
        <div>
          <form onSubmit={this.handleSubmit} className="ui form">
          <div className ="center fields">
          <div className="six wide field">
            <input type="text" value={this.state.emailInput} onChange={this.handleEmailChange} placeholder="email" />
          </div>
          <div className="six wide field">
            <input type="password" value={this.state.passwordInput} onChange={this.handlePasswordChange} placeholder="password"/>
          </div>
            <input type="submit"/>
          </div>
          </form>
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
