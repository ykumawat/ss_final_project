import React from 'react'
import * as ImageActions from '../../actions/images'
import * as ContactActions from '../../actions/contacts'
import * as SlideActions from '../../actions/slides'
import { Route, Link, withRouter } from 'react-router-dom'
import { Card, Button, Icon, Image, Modal, Form, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddNewImageForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.ImageActions.fetchImageInfo(this.props.url, this.state.imageFormType)
  }

  handleInputSubmit = (event) => {
    this.props.actions.ImageActions.fetchingInfoImageToText(event.target.value)
  }

  handleChangeURL = (event) => {
    this.props.changeURL()
  }

  handleChangeName = (event) => {
    if (event.target.value === "" ) {
      this.props.actions.ImageActions.addPerson([event.target.defaultValue])
    } else {
      this.props.actions.ImageActions.addPerson([event.target.value])
    }
  }

  handleChangeOrg = (event) => {
    if (event.target.value === "" ) {
      this.props.actions.ImageActions.addOrganization([event.target.defaultValue])
    } else {
      this.props.actions.ImageActions.addOrganization([event.target.value])
    }
  }

  handleChangeLoc = (event) => {
    if (event.target.value === "" ) {
      this.props.actions.ImageActions.addLocation([event.target.defaultValue])
    } else {
      this.props.actions.ImageActions.addLocation([event.target.value])
    }
  }

  handleChangeNote = (event) => {
    if (event.target.value === "" ) {
      this.props.actions.ImageActions.addNotes([event.target.defaultValue])
    } else {
      this.props.actions.ImageActions.addNotes([event.target.value])
    }
  }

  handleChangePhone = (event) => {
    if (event.target.value === "" ) {
      this.props.actions.ImageActions.addPhone([event.target.defaultValue])
    } else {
      this.props.actions.ImageActions.addPhone([event.target.value])
    }
  }

  handleChangeEmail = (event) => {
    if (event.target.value === "") {
      this.props.actions.ImageActions.addEmail([event.target.defaultValue])
    } else {
      this.props.actions.ImageActions.addEmail([event.target.value])
    }
  }

  handleNewContact = (event) => {
    event.preventDefault()
    this.props.actions.ContactActions.returnState()
  }

  handleNewNote = (event) => {
    event.preventDefault()
    this.props.actions.SlideActions.returnState()
  }

  handleNewTopic = (event) => {
    this.props.actions.ImageActions.addTopic(event.target.value)
  }

  imageType = (event) => {
    if (event.target.value === "contact") {
      this.setState({
        imageFormType: "contact"
      })
    } else if (event.target.value === "notes") {
      this.setState({
        imageFormType: "notes"
      })
    } else {
      null
    }
  }

  render() {
    if (this.props.isRendering === false) {
      return(
        <div align="center">
          <Modal trigger={<Button value="contact" onClick={this.imageType}>Business Card</Button>}>
            <Modal.Content>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input type="text" onChange={this.handleInputSubmit} value={this.props.url} placeholder="Enter your image URL"/>
                <Form.Button>Submit</Form.Button>
              </Form>
            </Modal.Content>
          </Modal>

          <Modal trigger={<Button value="notes" onClick={this.imageType}>Notes</Button>}>
            <Modal.Content>
              <Form onSubmit={this.handleSubmit}>
                <Form.Input type="text" onChange={this.handleInputSubmit} value={this.props.url} placeholder="Enter your image URL"/>
                <Form.Button>Submit</Form.Button>
              </Form>
            </Modal.Content>
          </Modal>

        </div>
      )
    } else if (this.state.imageFormType === "contact") {
        const nameInputs = this.props.name.map(n => {
          return (
            <div>
              <Form.Input type="text" defaultValue={n.name} onChange={this.handleChangeName} width="180" height="25"/>
            </div>
          )
        })

        const orgInputs = this.props.organization.map(org => {
          return (
            <div>
              <Form.Input type="text" defaultValue={org.name} onChange={this.handleChangeOrg} width="180" height="25"/>
            </div>
          )
        })

        const locInputs = this.props.location.map(loc => {
          return (
            <div>
              <Form.Input type="text" defaultValue={loc.name} onChange={this.handleChangeLoc} width="180" height="25"/>
            </div>
          )
        })

        const noteInputs = this.props.notes.map(note => {
          return (
            <div>
              <Form.Input type="text" defaultValue={note.name} onChange={this.handleChangeNote} width="180" height="25"/>
            </div>
          )
        })

        const emailInputs = this.props.email.map(e => {
          return (
            <div>
              <Form.Input type="text" defaultValue={e} onChange={this.handleChangeEmail} width="180" height="25"/>
            </div>
          )
        })

        const phoneInputs = this.props.email.map(p => {
          return (
            <div>
              <Form.Input type="text" defaultValue={p} onChange={this.handleChangePhone} width="180" height="25"/>
            </div>
          )
        })

      return (
        <div>
          <div>
            <Button onClick={this.handleChangeURL}>Change Image</Button>
          </div>
          <form onSubmit={this.handleNewContact}>
            <Grid columns={2}>
              <Grid.Column>
                <Image src={this.props.url} size='large'></Image>
              </Grid.Column>
              <Grid.Column>
            <div>
              Name: {nameInputs}
            </div>
            <div>
              Organization: {orgInputs}
            </div>
            <div>
              Location: {locInputs}
            </div>
            <div>
              Email: {emailInputs}
            </div>
            <div>
              Phone: {phoneInputs}
            </div>
            <div>
              Notes: {noteInputs}
            </div>
          </Grid.Column>
          </Grid>
              <Button type="submit">Save Contact</Button>
          </form>
        </div>
      )
    } else {
      const noteInputs = this.props.notes.map(note => {
        return (
          <div>
            <Form.TextArea type="text" defaultValue={note} onChange={this.handleChangeNote}/>
          </div>
        )
      })
      return (
        <div>
          <div>
            <Button onClick={this.handleChangeURL}>Change Image</Button>
          </div>
          <form onSubmit={this.handleNewNote}>
            <Grid columns={2}>
              <Grid.Column>
                <Image src={this.props.url} size='large'></Image>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <Form.TextArea type="text" onChange={this.handleNewTopic}/>
                </div>
                <div>
                  Notes: {noteInputs}
                </div>
              </Grid.Column>
            </Grid>
            <Button type="submit">Save Note</Button>
          </form>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    userId: state.user.userInfo.user.id,
    url: state.imageForm.url,
    name: state.imageForm.name,
    organization: state.imageForm.organization,
    location: state.imageForm.location,
    email: state.imageForm.email,
    phone: state.imageForm.phone,
    notes: state.imageForm.notes,
    text: state.imageForm.text,
    contactData: state.imageForm.contactData,
    isRendering: state.imageForm.isRendering
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ImageActions: bindActionCreators(ImageActions, dispatch),
      ContactActions: bindActionCreators(ContactActions, dispatch),
      SlideActions: bindActionCreators(SlideActions, dispatch)
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewImageForm))
