import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ContactActions from '../../actions/contacts'
import ContactsList from './ContactsList'
import { Route, Link, withRouter } from 'react-router-dom'


class ContactsContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    this.props.load()
  }

  componentWillReceiveProps(nextProps) {
    nextProps.load()
    console.log(nextProps);
    if (this.state.loggedIn) {
      this.props.loadUserContacts()
    }
  }

  render() {
    return(
      <div>
        <ContactsList contacts={this.state.contactList} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    contactList: state.contacts.list,
    loggedIn: state.user.userInfo.isLoggedin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsContainer))
