import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ContactActions from '../../actions/contacts'

class ContactsContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    this.props.loadUserContacts()
    console.log(this.props.contactList)
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
    contactList: state.contacts.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer)
