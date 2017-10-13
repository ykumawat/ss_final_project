import React from 'react'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return(
      <div className="ui secondary menu">
        <NavLink activeClassName="active" className="item" to="/home">Homepage</NavLink>
        <NavLink activeClassName="active" className="item" to="/me">My Profile</NavLink>
        <NavLink activeClassName="active" className="item" to="/contacts">Contacts</NavLink>
        <NavLink activeClassName="active" className="item" to="/slides">Slides</NavLink>
        <NavLink activeClassName="active" className="item" to="/misc">Misc</NavLink>
      </div>
    )
  }
}

export default Nav
