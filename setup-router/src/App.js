import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/notFound'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <Navbar></Navbar>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/contact' component={Contact}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
