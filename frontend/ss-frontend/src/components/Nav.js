import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/user'
import {Modal,Button,Grid, Menu} from 'semantic-ui-react'
import AddNewImageForm from './forms/AddNewImageForm'


class Nav extends React.Component {

  render() {
    if (localStorage.getItem('jwtToken')) {
      return(
        <Menu inverted color={'olive'}>
          <Menu.Menu>
            <Menu.Item>
              <Modal trigger={<Button inverted><img src="https://i.imgur.com/x8nJoyZ.png" height="30" width="30"/></Button>}>
                <Modal.Content>
                  <AddNewImageForm />
                </Modal.Content>
              </Modal>
            </Menu.Item>
          </Menu.Menu>
        <Menu.Item>
          <NavLink activeClassName="active" to="/explore">Explore</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink activeClassName="active" to="/me">My Profile</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink activeClassName="active" to="/contacts">Contacts</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink activeClassName="active" to="/slides">Slides</NavLink>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <NavLink activeClassName="active" onClick={this.props.logoutUser} to="/">Log Out</NavLink>
          </Menu.Item>
        </Menu.Menu>
        </Menu>

      )
    } else {
      return (
        <Menu inverted color={'olive'}>
          <Menu.Item>
            <img src="https://i.imgur.com/x8nJoyZ.png"/>
          </Menu.Item>
          <Menu.Item>
            <NavLink activeClassName="active" to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink activeClassName="active" to="/explore">Explore</NavLink>
          </Menu.Item>
        </Menu>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Nav)
