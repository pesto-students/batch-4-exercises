import React from 'react';
import { Link } from 'react-router-dom';

export default colorLinks => (
  <React.Fragment>
    <header className="App-header">
      <h1 className="App-title">Welcome to the Colorful Router.</h1>
      <h1>
        <Link to="/colors/new">Add a color</Link>
      </h1>
    </header>
    <div className="App-intro">
      <p>Please select a color.</p>

      <ul>{colorLinks}</ul>
    </div>
  </React.Fragment>
);
