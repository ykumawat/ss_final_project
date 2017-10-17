import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ContactActions from '../../actions/contacts'
import ContactsList from './ContactsList'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewFormHOC from '../hoc/AddNewFormHOC'
import { Grid, List, Loader} from 'semantic-ui-react'

class ContactsContainer extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     contacts: []
  //   }
  // }

  componentDidMount() {
    console.log("contacts container props: ", this.props);
    this.props.loadUserContacts()
  }
  //
  // componentWillReceiveProps(nextProps) {
  //   debugger
  //   if (this.state.isLoggedin) {
  //     console.log(this.state);
  //   }
  // }

  render() {
    return(
      <div>
        <Grid>
          <Grid.column width={16}>
            <AddNewFormHOC />
          </Grid.column>
        </Grid>
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
