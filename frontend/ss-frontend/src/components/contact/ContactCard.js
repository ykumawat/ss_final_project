import React from 'react'
import { Card, Button, Icon, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ContactCard extends React.Component {

  editContact() {
    
  }

  render() {
    const {contact} = this.props
    return (
      <div>
        <Card>
          <Card.Content>
            <Image wrapped size='medium' src={contact.url}/>
            <Card.Header>
              <br/>
              {contact.name}
              <br/>
              {contact.created_at}
              <br/>
            </Card.Header>
          </Card.Content>
          <Modal trigger={<Button>Show Info</Button>}>
            <Modal.Header>{contact.name}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={contact.url}/>
              <Modal.Description>
                <br/>
                <h3>Company: {contact.company}</h3>
                <p>Phone: {contact.phone}</p>
                <p>Email: {contact.email}</p>
                <p>Notes: {contact.notes}</p>
              </Modal.Description>
              <Button onClick={this.editContact}>Edit Contact</Button>
            </Modal.Content>
          </Modal>
        </Card>

      </div>


    )
  }
}

export default ContactCard
