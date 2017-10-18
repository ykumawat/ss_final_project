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
            <Image wrapped size='medium' src=''/>
            <Card.Header>
              <br/>
              example
              <br/>
              example
              <br/>
            </Card.Header>
          </Card.Content>
          <Modal trigger={<Button>Show Info</Button>}>
            <Modal.Header>example</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src=''/>
              <Modal.Description>
                <br/>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </Card>

      </div>


    )
  }
}

export default SlideCard
