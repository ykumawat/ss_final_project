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
    this.setState({
      contacts: this.props.contactList
    })
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
    contactList: state.contacts.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsContainer))
