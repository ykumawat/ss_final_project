import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import ToggleDisplay from 'react-toggle-display'
import * as UserActions from '../actions/user'

class LoginForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.emailInput !== "" && this.props.passwordInput !== "") {
      this.props.loginUser(this.props.emailInput, this.props.passwordInput)
    }
  }

  handleEmailChange = (event) => {
    this.props.handleEmailChange(event.target.value)
  }

  handlePasswordChange = (event) => {
    this.props.handlePasswordChange(event.target.value)
  }

  render(){
    // if (localStorage.getItem('jwtToken')) {
    //   return <Redirect to="/home"/>
    // } else {
      return(
        <div>
          <form onSubmit={this.handleSubmit} className="ui form">
          <div className ="center fields">
          <div className="six wide field">
            <input type="text" value={this.props.emailInput} onChange={this.handleEmailChange} placeholder="email" />
          </div>
          <div className="six wide field">
            <input type="password" value={this.props.passwordInput} onChange={this.handlePasswordChange} placeholder="password"/>
          </div>
          <div className="radio">
            <h4>No Account Yet?
              <a href="/SignUp">Sign Up Here</a>
            </h4>
          </div>
            <input type="submit"/>
          </div>
          </form>
        </div>
      )
    // }
  }
}

function mapStateToProps(state) {
  return {
    emailInput: state.user.emailInput,
    passwordInput: state.user.passwordInput
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
