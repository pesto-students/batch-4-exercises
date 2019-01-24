import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <ul className="nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {this.props.children}
        </React.Fragment>
      </Router>
    );
  }
}
