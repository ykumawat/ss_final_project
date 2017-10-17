import React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import ToggleDisplay from 'react-toggle-display'
import * as UserActions from '../actions/user'

class LoginForm extends React.Component {

  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.loginUser(this.state.email, this.state.password)
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
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
            <input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="email" />
          </div>
          <div className="six wide field">
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="password"/>
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
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginForm)
