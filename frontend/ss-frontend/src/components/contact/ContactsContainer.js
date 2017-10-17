import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ContactActions from '../../actions/contacts'
import ContactsList from './ContactsList'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewImageForm from '../forms/AddNewImageForm'
import { Grid, List, Loader} from 'semantic-ui-react'

class ContactsContainer extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     contacts: []
  //   }
  // }

  componentDidMount() {
    this.props.loadUserContacts()
  }

  render() {
    return(
      <div>
        <div style={{textAlign:"right"}}>
          <AddNewImageForm />
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
