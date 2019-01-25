import React, { Component } from "react";

import "./styles/App.css";

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      on: false,
      input: "",
      mainColor: "blue"
    };
  }
  handleStrings(string) {
    return !string;
  }
  handleInput(event) {
    const { value: input } = event.target;
    this.setState(() => ({ input }));
  }
  handleClick(event) {
    this.setState(previousState => ({ on: !previousState.on }));
  }
  render() {
    const { input, mainColor, on } = this.state;
    return (
      <div className="App">
        <h1 className={`${mainColor}`}>Welcome to React</h1>
        <h2>{input}</h2>
        <input type="text" value={input} onChange={this.handleInput} />
        <button onClick={this.handleClick}>
          <p className={"button-state"}>{on ? "Yes!" : "No!"}</p>
        </button>
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { hide, address } = this.props;
    if (hide) return null;
    return <a href={address}>link</a>;
  }
}

export default App;
