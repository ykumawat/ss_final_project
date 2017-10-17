import React, { Component } from 'react';
import ProfilesContainer from './components/profile/ProfilesContainer'
import ContactsContainer from './components/contact/ContactsContainer'
import SlidesContainer from './components/slide/SlidesContainer'
import MiscContainer from './components/misc/MiscContainer'
import Nav from './components/Nav'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import { Route, Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from './actions/user'
// NOTE: (10/11/17) add semantic for styling later on


class App extends Component {

  constructor() {
    super()
    this.state = {
      user: {},
      isLoggedin: false
    }
  }


  render() {
    return (
      <div className="App">
        <Route path="/" render={(routeProps) => <Nav onLogout={this.props.logout} {...routeProps}/>}/>
        <Route exact path="/" exact component={Home} />
        <Route path="/me" component={ProfilesContainer} />
        <Route path="/contacts" component={ContactsContainer} />
        <Route path="/slides" component={SlidesContainer} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.userInfo,
    isLoggedin: state.user.isLoggedin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
