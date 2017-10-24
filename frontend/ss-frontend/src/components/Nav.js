import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/user'
import {Modal} from 'semantic-ui-react'
import AddNewImageForm from './forms/AddNewImageForm'


class Nav extends React.Component {

  render() {
    if (localStorage.getItem('jwtToken')) {
      return(
        <div className="ui secondary menu">
          <NavLink activeClassName="active" className="left item" onClick={this.modal} to={window.location.pathname.toString().concat('#add')}>Add</NavLink>
          <NavLink activeClassName="active" className="center item" to="/explore">Explore</NavLink>
          <NavLink activeClassName="active" className="center item" to="/me">My Profile</NavLink>
          <NavLink activeClassName="active" className="center item" to="/contacts">Contacts</NavLink>
          <NavLink activeClassName="active" className="center item" to="/slides">Slides</NavLink>
          <NavLink activeClassName="active" className="center item" to="/misc">Misc</NavLink>
          <NavLink activeClassName="active" className="right item" onClick={this.props.logoutUser} to="/">Log Out</NavLink>
        </div>
      )
    } else {
      return (
        <div className="ui secondary menu">
          <NavLink activeClassName="active" className="left item" to="/">Home</NavLink>
          <NavLink activeClassName="active" className="right item" to="/explore">Explore</NavLink>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Nav)
