import React from 'react'
import { fetchImageInfo } from '../../actions/contacts'

function AddNewFormHOC(RenderedComponent, props) {
  return class extends React.Component {
    componentDidMount() {

    }

    render() {
      if(props.addContact) {
        console.log(props);
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
