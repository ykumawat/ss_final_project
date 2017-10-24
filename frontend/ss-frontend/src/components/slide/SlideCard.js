import React from 'react'
import { Card, Button, Icon, Image, Modal, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import * as SlideActions from '../../actions/slides'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SlideCard extends React.Component {

  state = {
    modalOpen: false
  }

  editSlide = (event) => {
    event.preventDefault()
    this.setState({
      modalOpen: false
    })
    this.props.editSlide(this.props.slide.id, this.state.text, this.state.topic)
  }

  shareSlide() {

  }

  deleteSlide = (event) => {
    event.preventDefault()
    this.props.deleteSlide(this.props.slide.id)
  }

  handleChangeTopic = (event) => {
    this.setState({
      topic: event.target.value
    })
  }

  handleChangeText = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

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
                <Modal.Actions>
                  <Modal trigger={<Button icon color='teal' onClick={this.editSlide}><Icon name='edit'/></Button>}>
                    <Modal.Content>
                      <Form onSubmit={this.editSlide}>
                        <Form.Input type="text" label="topic" defaultValue={slide.topic} onChange={this.handleChangeTopic}/>
                        <Form.Input type="text" label="text" defaultValue={slide.text} onChange={this.handleChangeText}/>
                        <Form.Button>Update Slide</Form.Button>
                      </Form>
                    </Modal.Content>
                  </Modal>

                  <Modal basic size="small" open={this.state.modalOpen} onClose={this.handleClose} trigger={<Button onClick={this.handleOpen} icon color='red'><Icon name='delete'/></Button>}>
                    <Modal.Content>
                      <h3>Are you sure you want to delete this slide?</h3>
                        <Modal.Actions>
                          <Button color='green' onClick={this.deleteSlide} inverted>
                            <Icon name='checkmark' /> Yes, I'm sure.
                          </Button>
                          <Button color='red' onClick={this.handleClose} inverted>
                            <Icon name='cancel' /> No, keep it!
                          </Button>
                        </Modal.Actions>
                      </Modal.Content>
                    </Modal>

                </Modal.Actions>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SlideActions, dispatch)
}

export default connect(null, mapDispatchToProps)(SlideCard)
