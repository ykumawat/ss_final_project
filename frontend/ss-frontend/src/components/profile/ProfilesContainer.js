import React from 'react'
import { connect } from 'react-redux'
import { fetchImageInfo } from '../../actions/contacts'
import ToggleDisplay from 'react-toggle-display'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewImageForm from '../forms/AddNewImageForm'
import UserActions from '../../actions/user'
import { Grid, List, Loader, Modal, Button} from 'semantic-ui-react'
import LinkedInContainer from './LinkedInContainer'
import NewsFeed from './NewsFeedContainer'
import MeetUp from './MeetUp'


class ProfilesContainer extends React.Component {

  render() {
    return (
      <div>
        <div align="center">
          <h2>Welcome, {this.props.user.name}!</h2>
        </div>
        <div align="center">
          <LinkedInContainer/>
        </div>
        <Grid divided='vertically'>
          <Grid.Row columns={3}>
            <Grid.Column>
              You have {this.props.contacts.length} contacts:
              <Modal trigger={<Button>Show</Button>}>
                yay! made it this far
              </Modal>
            </Grid.Column>
            <Grid.Column>
              You have {this.props.slides.length} contacts:
              <Modal trigger={<Button>Show</Button>}>
                eh, not as exciting this time
              </Modal>
            </Grid.Column>

            <Grid.Column>
              You have {this.props.slides.length} contacts:
              <Modal trigger={<Button>Show</Button>}>
                ok,,,i get it! also, this was just slides again until other gets added to backend
              </Modal>
            </Grid.Column>

          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column>
              <NewsFeed/>
            </Grid.Column>

            <Grid.Column>
              <MeetUp/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
