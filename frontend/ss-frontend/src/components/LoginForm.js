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
      this.setState({
        user: {
          email: this.state.emailInput, password: this.state.passwordInput, newUser: false
        }
      })
    this.props.loginUser(this.state.user)
    }
  }

  handleUserButton = (event) => {
  this.setState({
    newUser: !this.state.newUser
  })
}

  handleUsernameChange = (event) => {
    this.setState({
      usernameInput: event.target.value
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
              <input type="text" value={this.state.usernameInput} onChange={this.handleUsernameChange} placeholder="email" />
            </div>
            <div className="six wide field">
             <input type="password" value={this.state.passwordInput} onChange={this.handlePasswordChange} placeholder="password"/>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="new" onChange={this.handleUserButton}/>
                New User
              </label>
            </div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
