import React from 'react'
import { connect } from 'react-redux'
import { fetchImageInfo } from '../../actions/contacts'
import ToggleDisplay from 'react-toggle-display'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewImageForm from '../forms/AddNewImageForm'
import UserActions from '../../actions/user'

class ProfilesContainer extends React.Component {



  render() {
    return (
      <div>
        <AddNewImageForm/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    contacts: state.contacts.list,
    slides: state.slides.list
  }
}

export default withRouter(connect(mapStateToProps)(ProfilesContainer))
