import React from 'react'
import { connect } from 'react-redux'
import { fetchImageInfo } from '../actions/contacts'



class AddNewImageForm extends React.Component {


  componentDidMount() {
    this.props.fetchImageInfo() //url passed in here through form later
  }


  render() {
    return(
      <div>
        form
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    isFetching: state.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchImageInfo: () => {
      dispatch(fetchImageInfo())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewImageForm)
