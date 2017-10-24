import React from 'react'
import SlideCard from './SlideCard'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'


const SlidesList = (props) => {
  const slideCards = props.slides.map((slide) => {
    return <SlideCard slide={slide}/>
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
