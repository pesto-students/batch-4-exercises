import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';


class App extends Component {
  render() {
    console.log(Home);
    return (
      <Fragment>
        <Navbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
