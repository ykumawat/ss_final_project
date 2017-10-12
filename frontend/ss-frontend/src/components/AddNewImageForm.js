import React from 'react'
import { connect } from 'react-redux'
import { fetchImageInfo } from '../actions/contacts'



class AddNewImageForm extends React.Component {

  constructor() {
    super()
    this.state = {
      url: ""
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


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInputSubmit} value={this.state.url} placeholder="Enter your image URL"/>
          <input type="submit" value="submit"/>
        </form>
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

export default connect(null, mapDispatchToProps)(AddNewImageForm)
