import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import ToggleDisplay from 'react-toggle-display'
import * as UserActions from '../actions/user'
import

class LoginForm extends React.Component {

  handleSubmit = (event) => {
    //TODO this.setState is async as is loginUser; could be causing some bugs
    event.preventDefault()
    if (this.props.emailInput !== "" && this.props.passwordInput !== "") {
      this.setState({
        user: {
          email: this.state.emailInput, password: this.state.passwordInput
        }
      })
    this.props.loginUser(this.state.user)
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
    emailInput: state.loginForm.emailInput,
    passwordInput: state.loginForm.passwordInput
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
