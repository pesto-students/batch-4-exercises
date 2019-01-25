import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.changeText = this.changeText.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
    };
  }

  changeText() {
    this.setState(({ on }) => ({ on: !on }));
  }

  updateHeading(event) {
    this.setState({ input: event.currentTarget.value });
  }

  handleStrings(stringToEvaluate) {
    return Boolean(stringToEvaluate.length);
  }

  render() {
    return (
      <div className={this.state.mainColor}>
        <h1 className="heading">Welcome to React</h1>
        <h2 className="subheading">{this.state.input}</h2>

        <button className="btn btn-primary" onClick={this.changeText}>
          Change Text
        </button>
        <p className="button-state">{this.state.on ? 'Yes!' : 'No!'}</p>

        <label htmlFor="heading-input">Change subheading</label>
        <div className="field-container">
          <input id="heading-input" name="heading-input" value={this.state.input} onChange={this.updateHeading} />
        </div>
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { hide, address } = this.props;
    return hide ? null : (
      <a className="link" href={address}>Redirect</a>
    );
  }
}

export default App;
