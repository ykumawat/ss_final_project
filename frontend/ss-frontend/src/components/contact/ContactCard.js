import React from 'react'
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ContactCard extends React.Component {

  render() {
    const { contact } = this.props
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>
              <Link to={"/contacts/" + contact.id}>{contact.name}</Link>
            </Card.Header>
          </Card.Content>
        </Card>
      </div>


    )
  }
}





export default ContactCard
