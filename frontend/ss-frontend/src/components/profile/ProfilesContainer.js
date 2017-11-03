import React from 'react'
import { connect } from 'react-redux'
import { fetchImageInfo } from '../../actions/contacts'
import ToggleDisplay from 'react-toggle-display'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewImageForm from '../forms/AddNewImageForm'
import * as ContactActions from '../../actions/contacts'
import * as SlideActions from '../../actions/slides'
import { Grid, List, Loader, Modal, Button, Image, Segment, Divider} from 'semantic-ui-react'
import LinkedInContainer from './LinkedInContainer'
import NewsFeed from './NewsFeedContainer'
import MeetUp from './MeetUp'
import { bindActionCreators } from 'redux'
import ContactCard from '../contact/ContactCard'
import SlideCard from '../slide/SlideCard'


class ProfilesContainer extends React.Component {

  componentDidMount() {
    this.props.actions.ContactActions.loadUserContacts()
    this.props.actions.SlideActions.loadUserSlides()
  }

  render() {
    const ContactList = this.props.contacts.map((contact) => {
      return <ContactCard contact={contact} />
    })

    const SlideList = this.props.slides.map((slide) => {
      return <SlideCard slide={slide} />
    })
    return (
        <Grid >
          <Grid.Row columns={2}>
            <Grid.Column>
              <h2>Welcome, {this.props.user.name}!</h2>
              <Image wrapped size='medium' src={this.props.user.profile_image} bordered/>
            </Grid.Column>
            <Grid.Column>
              <Grid.Row>
                You have {this.props.contacts.length} contacts:
                <Modal trigger={<Button>Show</Button>}>
                  {ContactList}
                </Modal>
              </Grid.Row>
              <Grid.Row>
                You have {this.props.slides.length} notes:
                <Modal trigger={<Button>Show</Button>}>
                  {SlideList}
                </Modal>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
            <NewsFeed/>
        </Grid>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ContactActions: bindActionCreators(ContactActions, dispatch),
      SlideActions: bindActionCreators(SlideActions, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesContainer)
