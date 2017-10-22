import React from 'react'
import { Card, Button, Icon, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class SlideCard extends React.Component {

  editSlide() {

  }

  shareSlide() {

  }

  deleteSlide() {
    
  }

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
            <Modal.Header>
              {slide.topic}
              <div align='right'>
                <Button icon color='teal' onClick={this.editSlide}><Icon name='edit'/></Button>
                <Button icon color='yellow' onClick={this.shareSlide}><Icon name='share'/></Button>
                <Button icon color='red' onClick={this.deleteSlide}><Icon name='delete'/></Button>
              </div>
            </Modal.Header>
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
