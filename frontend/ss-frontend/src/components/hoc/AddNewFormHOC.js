import React from 'react'
import { fetchImageInfo } from '../../actions/contacts'
import { Route, Link, withRouter } from 'react-router-dom'
import ToggleDisplay from 'react-toggle-display'
import { connect } from 'react-redux'


class AddNewFormHOC extends React.Component {
  constructor() {
    super()
    this.state = {
      showForm: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let urlInput = this.state.url
    this.props.fetchImageInfo(urlInput)
  }

  handleInputSubmit = (event) => {
    this.setState({
      url: event.target.value
    })
  }

  showAddContactForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let urlInput = this.state.addContact.url
    this.props.fetchImageInfo(urlInput)
  }

  handleInputSubmit = (event) => {
    this.setState({
      addContact: {
        url: event.target.value
      }
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.showAddContactForm}>+</button>
        <ToggleDisplay show={this.state.showForm}>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={this.handleInputSubmit} value={this.state.url} placeholder="Enter your image URL"/>
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
    company: state.imageForm.company,
    email: state.imageForm.email,
    phone: state.imageForm.phone,
    notes: state.imageForm.notes,
    image: state.imageForm.image
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchImageInfo: (url) => {
      dispatch(fetchImageInfo(url))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewFormHOC))
