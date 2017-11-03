import React from 'react'
import SlideCard from './SlideCard'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as SlideActions from '../../actions/slides'
import { bindActionCreators } from 'redux'

class SlidesList extends React.Component {
  componentDidMount() {
    this.props.loadUserSlides()
  }

  render() {
    const slideCards = this.props.slides.map((slide) => {
      return <SlideCard slide={slide}/>
    })
    return(
      <Grid>
        <Grid.Row>
            {slideCards}
        </Grid.Row>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return {
    slides: state.slides.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SlideActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SlidesList)
