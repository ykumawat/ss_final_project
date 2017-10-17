import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/user'


class Nav extends React.Component {

  render() {
    if (localStorage.getItem('jwtToken')) {
      return(
        <div className="ui secondary menu">
          <NavLink activeClassName="active" className="item" to="/">Homepage</NavLink>
          <NavLink activeClassName="active" className="item" to="/me">My Profile</NavLink>
          <NavLink activeClassName="active" className="item" to="/contacts">Contacts</NavLink>
          <NavLink activeClassName="active" className="item" to="/slides">Slides</NavLink>
          <NavLink activeClassName="active" className="item" to="/misc">Misc</NavLink>
          <NavLink activeClassName="active" className="right item" onClick={this.props.logoutUser} to="/">Log Out</NavLink>
        </div>
      )
    } else {
      return (
        <div className="ui secondary menu">
          <NavLink activeClassName="active" className="item" to="/">Homepage</NavLink>
          <NavLink activeClassName="active" className="item" to="/me">My Profile</NavLink>
          <NavLink activeClassName="active" className="item" to="/contacts">Contacts</NavLink>
          <NavLink activeClassName="active" className="item" to="/slides">Slides</NavLink>
          <NavLink activeClassName="active" className="item" to="/misc">Misc</NavLink>
          <NavLink activeClassName="active" className="right item" to="/login">Log In</NavLink>
          <NavLink activeClassName="active" className="right item" to="/signup">Sign Up</NavLink>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Nav)
