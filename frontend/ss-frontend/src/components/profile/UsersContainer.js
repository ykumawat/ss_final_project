import React from 'react'
import { Card, Button, Icon, Image, Modal, Form } from 'semantic-ui-react'
import '../../index.css'

class UsersContainer extends React.Component {

  handleAddFriend() {
    console.log("added!");
  }

  render() {
    return (
      <div className={'contact-card'}>
        <img src={this.props.user.profile_image} style={{width: '150px', margin: '0 auto'}}>
        </img>
        <h2>
          {this.props.user.name}
        </h2>
        <button className={'nice-button'} onClick={this.handleAddFriend} >
          Add Friend
        </button>
      </div>
    )
  }
}

export default UsersContainer
