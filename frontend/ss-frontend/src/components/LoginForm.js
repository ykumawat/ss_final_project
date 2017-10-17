import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/user'

class LoginForm extends React.Component {

  constructor() {
    super()
    this.state = {
      emailInput: "",
      passwordInput: "",
      newUser: false,
      user: {}
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.emailInput !== "" && this.state.passwordInput !== "") {
      if (document.getElementById('new').checked) {
        this.setState({
          user: {
            email: this.state.emailInput, password: this.state.passwordInput
          }
        })
        this.props.signupUser(this.state.user)

      } else {
        this.setState({
          user: {
            email: this.state.emailInput, password: this.state.passwordInput
          }
        })
      this.props.loginUser(this.state.user)
      }
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
            <div className="radio">
              <label>
                <input type="radio" name="new" id="new" />
                New User
              </label>
              <label>
                <input type="radio" name="existing" id="existing" />
                Existing User
              </label>
            </div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginForm)
