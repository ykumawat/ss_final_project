import React from 'react'
import { Card, Button, Icon, Image, Modal, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as ContactActions from '../../actions/contacts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ContactCard extends React.Component {

  editContact = (event) => {
    event.preventDefault()
    console.log(this.state.id, this.state.name, this.state.company, this.state.email, this.state.phone, this.state.notes)
    this.props.editContact(this.props.id, this.state.name, this.state.company, this.state.email, this.state.phone, this.state.notes)
  }

  emailContact() {

  }

  shareContact() {

  }

  deleteContact() {

  }

  makeContactPublic() {
  }

  makeContactPrivate() {
  }

  handleChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleChangeCompany = (event) => {
    this.setState({
      company: event.target.value
    })
  }

  handleChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleChangePhone = (event) => {
    this.setState({
      phone: event.target.value
    })
  }

  handleChangeNotes = (event) => {
    this.setState({
      notes: event.target.value
    })
  }

  render() {
    const {contact} = this.props

    this.setState({
      id: this.props.id
    })

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
                <Modal.Actions>
                  <Modal trigger={<Button icon color='teal'><Icon name='edit'/></Button>}>
                    <Modal.Content>
                      <Form onSubmit={this.editContact}>
                        <Form.Input type="text" label="Name: " defaultValue={contact.name} onChange={this.handleChangeName}/>
                        <Form.Input type="text" label="Company: " defaultValue={contact.company} onChange={this.handleChangeCompany}/>
                        <Form.Input type="text" label="Email: " defaultValue={contact.email} onChange={this.handleChangeEmail}/>
                        <Form.Input type="text" label="Phone: " defaultValue={contact.phone} onChange={this.handleChangePhone}/>
                        <Form.Input type="text" label="Notes: " defaultValue={contact.notes} onChange={this.handleChangeNotes}/>
                        <Form.Button>Update Contact</Form.Button>
                      </Form>
                    </Modal.Content>
                  </Modal>

                  <Modal trigger={<Button icon color='green'><Icon name='mail outline'/></Button>}>
                    <Modal.Content>
                      //form for email here
                    </Modal.Content>
                  </Modal>

                  <Modal trigger={<Button icon color='yellow'><Icon name='share'/></Button>}>
                    <Modal.Content>
                      //form for share here
                    </Modal.Content>
                  </Modal>

                  <Modal trigger={<Button icon color='red'><Icon name='delete'/></Button>}>
                    <Modal.Content>
                      //form for delete here
                    </Modal.Content>
                  </Modal>

                </Modal.Actions>
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


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactActions, dispatch)
}

export default connect(null, mapDispatchToProps)(ContactCard)
