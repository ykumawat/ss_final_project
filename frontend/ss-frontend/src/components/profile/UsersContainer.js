import React from 'react'
import { Card, Button, Icon, Image, Modal, Form } from 'semantic-ui-react'

class UsersContainer extends React.Component {

  handleAddFriend() {
    console.log("added!");
  }

  render() {
    return (
      <Card>
      <Card.Content>
      <Image src= {this.props.user.profile_image} size='small'/>
        <Card.Header>
          {this.props.user.name}
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={this.handleAddFriend}>
          <Icon name='user'/>
          Add Friend
        </Button>
      </Card.Content>
      </Card>
    )
  }
}

export default UsersContainer
