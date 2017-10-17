import React from 'react'
import { connect } from 'react-redux'
import { fetchImageInfo } from '../../actions/contacts'
import ToggleDisplay from 'react-toggle-display'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewFormHOC from '../hoc/AddNewFormHOC'

class ProfilesContainer extends React.Component {



  render() {
    return (
      <div>
        <AddNewFormHOC/>
      </div>
    )
  }

}


export default ProfilesContainer
