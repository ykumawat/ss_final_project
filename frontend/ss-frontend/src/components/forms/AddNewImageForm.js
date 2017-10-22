import React from 'react'
import * as ImageActions from '../../actions/images'
import { Route, Link, withRouter } from 'react-router-dom'
import { Card, Button, Icon, Image, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddNewImageForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchImageInfo(this.props.url)
  }

  handleInputSubmit = (event) => {
    this.props.fetchingInfoImageToText(event.target.value)
  }

  handleChangeURL = (event) => {
    this.props.changeURL()
  }

  handleChangeName = (event) => {
    console.log("why doesnt this work");
  }

  handleNewContact = (event) => {
    event.preventDefault()
    this.props.addContactToUser()
  }

  addField = (event) => {
    return(
      <div>
        <input type="text"></input>
      </div>
    )
  }

  render() {
    if (this.props.isRendering === false) {
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleInputSubmit} value={this.props.url} placeholder="Enter your image URL"/>
            <input type="submit" value="submit"/>
          </form>
        </div>
      )
    } else {
        const nameInputs = this.props.name.map(n => {
          return (
            <input type="text" value={n.name} />
          )
        })

        const orgInputs = this.props.organization.map(org => {
          return (
            <input type="text" value={org.name}/>
          )
        })

        const locInputs = this.props.location.map(loc => {
          return (
            <input type="text" value={loc.name}/>
          )
        })

        const noteInputs = this.props.notes.map(note => {
          return (
            <input type="text" value={note.name}/>
          )
        })

      return (
        <div>
          <div>
            <Button onClick={this.handleChangeURL}>Change Image</Button>
          </div>
          <form onSubmit={this.handleNewContact}>
            <Image src={this.props.url}></Image>
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
              Notes: {noteInputs}
            </div>
            <Button type="submit">Save Contact</Button>
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
    contactData: state.imageForm.contactData,
    isRendering: state.imageForm.isRendering
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImageActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewImageForm))
