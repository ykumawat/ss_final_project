import React from 'react'
import SlideCard from './SlideCard'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'


const SlidesList = (props) => {
  const slideCards = props.slides.map((slide, index) => {
    return <SlideCard key={index} slide={slide}/>
  })
  return (
    <Grid>
      <Grid.Row>
          {slideCards}
      </Grid.Row>
    </Grid>
  )
}

export default SlidesList
