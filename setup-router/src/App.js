import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FourZeroFour from './components/FourZeroFour';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Redirect exact from="/" to="/home" />
          <Route component={FourZeroFour}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
