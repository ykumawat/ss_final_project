import React from 'react'
import { Card, Button, Icon, Image, Modal, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as ContactActions from '../../actions/contacts'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../../index.css'

class ContactCard extends React.Component {

  state = {
    modalOpen: false
  }

  editContact = (event) => {
    event.preventDefault()
    this.props.editContact(this.props.contact.id, this.state.name, this.state.company, this.state.email, this.state.phone, this.state.notes)
  }

  deleteContact = (event) => {
    event.preventDefault()
    this.props.deleteContact(this.props.contact.id)
  }

  makeContactPublic = (event) => {
    if (this.props.contact.shared === true) {
      this.props.removeContactFromNewsFeed(this.props.contact.id)
    } else {
      this.props.shareContactOnNewsFeed(this.props.contact.id)
    }
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

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    const {contact} = this.props
    const dateCreated = contact.created_at.split("-")
    dateCreated[2] = dateCreated[2].substring(0,2)
    const d = new Date(dateCreated)
    const month = d.getMonth()+1
    const day = d.getDate()
    const year = d.getFullYear()

    return (
      <div>
        <Card>
          <Card.Content>
            <Image className={'contact-card'} wrapped size='medium' src={contact.url}/>
            <Card.Header>
              <br/>
              {contact.name}
              <br/>
              Added on: {month} {day}, {year}
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

                  <Modal basic size="small" open={this.state.modalOpen} onClose={this.handleClose} trigger={<Button onClick={this.handleOpen} icon color='red'><Icon name='delete'/></Button>}>
                    <Modal.Content>
                          <h3>Are you sure you want to delete this contact?</h3>
                          <Modal.Actions>
                            <Button color='green' onClick={this.deleteContact} inverted>
                              <Icon name='checkmark' /> Yes, I'm sure.
                            </Button>
                            <Button color='red' onClick={this.handleClose} inverted>
                              <Icon name='cancel' /> No, keep it!
                            </Button>
                          </Modal.Actions>
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
                <Button color={this.props.contact.shared ? 'olive' : 'grey'} onClick={this.makeContactPublic}>Public</Button>
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
