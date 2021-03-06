import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as UserActions from '../../actions/user'
import SignUpForm from './SignUpForm'
import { Form, Button } from 'semantic-ui-react'

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
      return <Redirect to="/me"/>
    } else {
      return(
        <div align="center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder="email" />
            <Form.Input type="password" value={this.state.password} onChange={this.handlePasswordChange} placeholder="password"/>
            <Form.Button>Submit</Form.Button>
        </Form>
          <div>
            <h4>No Account Yet?
              <Link to="/signup" component={SignUpForm}> Sign Up Here</Link>
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

export default connect(null, mapDispatchToProps)(LoginForm)
