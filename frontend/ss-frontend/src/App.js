import React, { Component } from 'react';
import ProfilesContainer from './components/profile/ProfilesContainer'
import ContactsContainer from './components/contact/ContactsContainer'
import SlidesContainer from './components/slide/SlidesContainer'
import MiscContainer from './components/misc/MiscContainer'
import Nav from './components/Nav'
import { Route, Redirect } from 'react-router-dom'
// NOTE: (10/11/17) add semantic for styling later on


class App extends Component {

  render() {
    return (
      <div className="App">
        <Route path="/" render={(routeProps) => <Nav {...routeProps}/>}/>
        <h2> Welcome, user!</h2>
      </div>
    );
  }
}

export default App;
