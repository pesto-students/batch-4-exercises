import React, { Component } from 'react';
import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }
  handleStrings(str) {
    if (str.length > 0) {
      return true;
    }
    return false;
  }
  render() {
    const buttonText = this.state.on ? 'Yes!' : 'No!'
    return (
      <React.Fragment>
        <h1 className={"App " + this.state.mainColor}>
          Welcome to React
        </h1>
        <h2>{this.state.input}</h2>
        <input onChange={(event) => this.setState({ input: event.target.value })} />
        <button onClick={() => this.setState((state) => ({ on: !state.on }))}>
          <p className='button-state'>{buttonText}</p>
        </button>
        <Link address="www.google.com" />
      </React.Fragment >
    );
  }
}

export class Link extends Component {
  render() {
    return null;
  }
}

export default App;
