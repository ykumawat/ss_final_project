import React from 'react'
import { connect } from 'react-redux'
import AddNewFormHOC from '../hoc/AddNewFormHOC'
import { fetchImageInfo } from '../../actions/contacts'
import ToggleDisplay from 'react-toggle-display'
import { Route, Link, withRouter } from 'react-router-dom'

class ProfilesContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      addContact: {
        url: "",
        name: "",
        company: "",
        email: "",
        phone: "",
        notes: "",
        image: ""
      },
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
    const NewImageAdd = AddNewFormHOC(ProfilesContainer, this.state)
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
        <NewImageAdd />
      </div>
    )
  }

}


function mapDispatchToProps(dispatch) {
  return {
    fetchImageInfo: (url) => {
      dispatch(fetchImageInfo(url))
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ProfilesContainer))
