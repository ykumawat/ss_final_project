import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SlidesActions from '../../actions/slides'
import SlidesList from './SlidesList'
import { Route, Link, withRouter } from 'react-router-dom'
import AddNewImageForm from '../forms/AddNewImageForm'
import { Grid, List, Loader, Modal, Button} from 'semantic-ui-react'

class SlidesContainer extends React.Component {

  componentDidMount() {
    this.props.loadUserSlides()
  }

  render() {
    return(
      <div>
        <h2 align="center">Your Slides</h2>
           <Route exact path="/slides" render={(props) => <SlidesList slides={this.props.slideList} {...props} />}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    slideList: state.slides.list,
    loggedIn: state.user.isLoggedin
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SlidesActions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SlidesContainer))
