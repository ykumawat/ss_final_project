import React from 'react'
import ContactCard from './ContactCard'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as ContactActions from '../../actions/contacts'
import { bindActionCreators } from 'redux'


class ContactsList extends React.Component {
  componentDidMount() {
    this.props.loadUserContacts()
  }

  render() {
    const contactCards = this.props.contacts.map((contact) => {
      return <ContactCard contact={contact}/>
    })
    return(
      <Grid>
        <Grid.Row>
            {contactCards}
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactsList)
