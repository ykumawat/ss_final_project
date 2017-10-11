import React, { Component } from 'react';
import ProfilesContainer from './components/ProfilesContainer'
import ContactsContainer from './components/ContactsContainer'
import SlidesContainer from './components/SlidesContainer'
import MiscContainer from './components/MiscContainer'
import AddNewImageForm from './components/AddNewImageForm'
import Nav from './components/Nav'
import { Route, Redirect } from 'react-router-dom'
// NOTE: (10/11/17) add semantic for styling later on


class App extends Component {
  render() {
    return (
      <div className="App">
        <ProfilesContainer/>
        <AddNewImageForm/>
      </div>
    );
  }
}

export default App;
