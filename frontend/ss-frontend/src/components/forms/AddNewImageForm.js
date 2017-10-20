import React from 'react'
import * as ImageActions from '../../actions/images'
import { Route, Link, withRouter } from 'react-router-dom'
import { Card, Button, Icon, Image, Modal } from 'semantic-ui-react'
import ToggleDisplay from 'react-toggle-display'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddNewImageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false,
      organization: [],
      person: [],
      location: [],
      other: []
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchImageInfo(this.props.url)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contactData !== "") {
      this.categorizeData(nextProps.contactData.entities)
    }
  }

  categorizeData = (data) => {
    let orgs = []
    let person = []
    let locations = []
    let other = []
    data.map((entity) => {
      if (entity.type === "ORGANIZATION") {
        orgs.concat(entity)
      } else if (entity.type === "PERSON" && entity.name.split(" ").length > 1) {
        person.concat(entity)
      } else if (entity.type === "LOCATION") {
        locations.concat(entity)
      } else {
        other.concat(entity)
      }
    })
    this.props.addOrganization(orgs)
    this.props.addPerson(person)
    this.props.addLocation(locations)
    this.props.addNotes(other)
  }

  renderModalForm() {

  }

  handleInputSubmit = (event) => {
    this.props.fetchingInfoImageToText(event.target.value)
  }

  showAddContactForm = (event) => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInputSubmit} value={this.props.url} placeholder="Enter your image URL"/>
          <input type="submit" value="submit"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    url: state.imageForm.url,
    name: state.imageForm.name,
    organization: state.imageForm.organization,
    email: state.imageForm.email,
    phone: state.imageForm.phone,
    notes: state.imageForm.notes,
    contactData: state.imageForm.contactData
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ImageActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewImageForm))
