import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
      buttonText: 'No!',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleStrings = this.handleStrings.bind(this);
  }

  handleClick() {
    this.setState({ buttonText: 'Yes!' });
  }

  handleInput(event) {
    const { value } = event.currentTarget;
    this.setState({ input: value });
  }

  handleStrings(stringValue) {
    return stringValue === 'Hello World';
  }

  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>
        <button onClick={this.handleClick}>Change Text</button>
        <p className="button-state">{this.state.buttonText}</p>
        <h2>{this.state.input}</h2>
        <input type="text" name="name" onChange={this.handleInput} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    if (this.props.hide === true) return null;
    return <a href={this.props.address}>{this.props.address}</a>;
  }
}

export default App;
