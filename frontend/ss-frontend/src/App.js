import React, { Component } from 'react';
import ProfilesContainer from './components/profile/ProfilesContainer'
import ContactsContainer from './components/contact/ContactsContainer'
import SlidesContainer from './components/slide/SlidesContainer'
import Nav from './components/Nav'
import Home from './components/Home'
import LoginForm from './components/forms/LoginForm'
import SignUpForm from './components/forms/SignUpForm'
import { Route, Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from './actions/user'
import { Grid, List, Loader, Modal, Button} from 'semantic-ui-react'
import Explore from './components/Explore'


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
      <div>
        <div className="App">
          <Route path="/" render={(routeProps) => <Nav onLogout={this.props.logout} {...routeProps}/>}/>
          <Route exact path="/" exact component={Home} />
          <Route path="/me" component={ProfilesContainer} />
          <Route path="/contacts" component={ContactsContainer} />
          <Route path="/notes" component={SlidesContainer} />
          <Route path="/explore" component={Explore} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
        </div>
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
