import React from 'react'
import { connect } from 'react-redux'

class MeetUp extends React.Component {

  render() {
    return(
      <div>
        <h3>Networking events in {this.props.user.zipcode} for the next 5 days:</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.userInfo.user
  }
}

export default connect(mapStateToProps)(MeetUp)
