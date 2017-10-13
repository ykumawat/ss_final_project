import React, { Component } from 'react';
import ProfilesContainer from './components/profile/ProfilesContainer'
import ContactsContainer from './components/contact/ContactsContainer'
import SlidesContainer from './components/slide/SlidesContainer'
import MiscContainer from './components/misc/MiscContainer'
import Nav from './components/Nav'
import Login from './components/Login'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUser, logoutUser, signupUser } from './services/user'
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
        <Route path="/" render={(routeProps) => <Nav {...routeProps}/>}/>
        <ProfilesContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
