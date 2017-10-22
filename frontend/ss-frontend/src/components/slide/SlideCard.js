import React from 'react'
import { Card, Button, Icon, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SlideCard extends React.Component {

  render() {
    const {slide} = this.props
    return (
      <div>
        <Card>
          <Card.Content>
            <Image wrapped size='medium' src={slide.url}/>
            <Card.Header>
              <br/>
              {slide.topic}
              <br/>
              {slide.text}
              <br/>
            </Card.Header>
          </Card.Content>
          <Modal trigger={<Button>Show Info</Button>}>
            <Modal.Header>{slide.topic}</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src={slide.url}/>
              <Modal.Description>
                <br/>
                <p>Topic: {slide.topic}</p>
                <p>Text: {slide.text}</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card>

      </div>


    )
  }
}

export default SlideCard
