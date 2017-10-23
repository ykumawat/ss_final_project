import React from 'react'
import { Card, Button, Icon, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ContactCard extends React.Component {

  editContact() {

  }

  emailContact() {

  }

  shareContact() {

  }

  deleteContact() {

  }

  makeContactPublic() {
    return (
      <div>
        <Modal>

        </Modal>
      </div>
    )
  }

  makeContactPrivate() {
    return (
      <div>
        <Modal>

        </Modal>
      </div>
    )
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
            <Modal.Header>
              {contact.name}
              <div align='right'>
                <Button icon color='teal' onClick={this.editContact}><Icon name='edit'/></Button>
                <Button icon color='green' onClick={this.emailContact}><Icon name='mail outline'/></Button>
                <Button icon color='yellow' onClick={this.shareContact}><Icon name='share'/></Button>
                <Button icon color='red' onClick={this.deleteContact}><Icon name='delete'/></Button>
              </div>
            </Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={contact.url}/>
              <Modal.Description>
                <h3>Company: {contact.company}</h3>
                <p>Phone: {contact.phone}</p>
                <p>Email: {contact.email}</p>
                <p>Notes: {contact.notes}</p>
                <p><input type="radio" value="public" onChange={this.makeContactPublic}/></p>
                <p><input type="radio" value="private" onChange={this.makeContactPrivate}/></p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card>

      </div>


    )
  }
}

export default ContactCard
