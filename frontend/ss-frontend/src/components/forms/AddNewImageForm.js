import React from 'react'
import * as ImageActions from '../../actions/images'
import { Route, Link, withRouter } from 'react-router-dom'
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
    console.log(this.props.url);
    this.props.fetchImageInfo(this.props.url)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contactData !== "") {
      this.renderModalForm(nextProps.contactData.entities)
    }
  }

  renderModalForm = (data) => {
    data.map((entity) => {
      if (entity.type === "ORGANIZATION") {
        this.setState({
          organization: this.state.organization.concat(entity)
        })
      } else if (entity.type === "PERSON" && entity.name.split(" ").length > 1) {
        this.setState({
          person: this.state.person.concat(entity)
        })
      } else if (entity.type === "LOCATION") {
        this.setState({
          location: this.state.location.concat(entity)
        })
      } else {
        this.setState({
          other: this.state.other.concat(entity)
        })
      }
    })
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
        <button onClick={this.showAddContactForm}>+</button>
        <ToggleDisplay show={this.state.showForm}>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleInputSubmit} value={this.props.url} placeholder="Enter your image URL"/>
              <input type="submit" value="submit"/>
            </form>
          </div>
        </ToggleDisplay>
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
