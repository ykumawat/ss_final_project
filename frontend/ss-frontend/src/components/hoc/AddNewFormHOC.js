import React from 'react'
import { fetchImageInfo } from '../../actions/contacts'

function AddNewFormHOC(RenderedComponent, props) {
  return class extends React.Component {
    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
      console.log(props, nextProps)
    }

    render() {
      if(props.addContact) {
        return(
          <div>

          </div>
        )
      } else {
        "sorry"
      }
    }
  }
}


export default AddNewFormHOC
