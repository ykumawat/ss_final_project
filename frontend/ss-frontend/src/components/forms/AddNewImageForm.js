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
      showForm: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchImageInfo(this.state.url)
    // if (this.props.fetchImageInfo(this.state.url) !== undefined) {
    //   debugger
    //     this.props.textProcessing(text) // FIX THIS. IT IS ASYNC
    // }
  }

  handleInputSubmit = (event) => {
    this.setState({
      url: event.target.value
    })
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
  return bindActionCreators(ImageActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddNewImageForm))
