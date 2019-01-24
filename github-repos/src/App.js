import React, { Component } from 'react';

import './App.css';

import GetUsernameForm from './components/GetUsernameForm';
import Repos from './components/Repos';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GetUsernameForm />
        <Repos />
      </React.Fragment>
    );
  }
}

export default App;
