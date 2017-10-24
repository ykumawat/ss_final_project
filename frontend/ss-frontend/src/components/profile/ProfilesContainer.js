import React from 'react'
import { connect } from 'react-redux'
import { fetchImageInfo } from '../../actions/contacts'
import ToggleDisplay from 'react-toggle-display'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewImageForm from '../forms/AddNewImageForm'
import UserActions from '../../actions/user'
import { Grid, List, Loader, Modal, Button} from 'semantic-ui-react'

class ProfilesContainer extends React.Component {

  render() {
    return (
      <div>
        <div align="center">
          <h2>Welcome, {this.props.user.name}!</h2>
        </div>
        <div align="right">
          <Modal trigger={<Button>(+)</Button>}>
            <Modal.Content>
              <AddNewImageForm />
            </Modal.Content>
          </Modal>
        </div>
        <div>
          <h3>Networking events in {this.props.user.zipcode} for the next 5 days:</h3>
        </div>
        <div>

        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user.userInfo.user,
    contacts: state.contacts.list,
    slides: state.slides.list
  }
}

export default withRouter(connect(mapStateToProps)(ProfilesContainer))
