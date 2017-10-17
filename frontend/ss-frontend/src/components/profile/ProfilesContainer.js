import React from 'react'
import { connect } from 'react-redux'
import { fetchImageInfo } from '../../actions/contacts'
import ToggleDisplay from 'react-toggle-display'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewImageForm from '../forms/AddNewImageForm'

class ProfilesContainer extends React.Component {



  render() {
    return (
      <div>
        <AddNewImageForm/>
      </div>
    )
  }

}


export default ProfilesContainer
