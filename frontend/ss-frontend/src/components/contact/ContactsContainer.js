import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ContactActions from '../../actions/contacts'
import ContactsList from './ContactsList'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewImageForm from '../forms/AddNewImageForm'
import { Grid, List, Loader, Modal, Button} from 'semantic-ui-react'

class ContactsContainer extends React.Component {

  componentDidMount() {
    this.props.loadUserContacts()
  }

  render() {
    return(
      <div>
        <div>
          <Modal trigger={<Button>(+)</Button>}>
            <Modal.Content>
              <AddNewImageForm />
            </Modal.Content>
          </Modal>
        </div>
           <Route exact path="/contacts" render={(props) => <ContactsList contacts={this.props.contactList} {...props} />}/>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    contactList: state.contacts.list,
    loggedIn: state.user.isLoggedin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsContainer))
