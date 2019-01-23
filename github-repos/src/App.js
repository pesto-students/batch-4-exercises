/* eslint-disable */
import React, { Fragment, Component } from "react";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      repoList: []
    };
  }
  handleSubmit(evt) {
    async () => {
      await fetch;
    };
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username : <input name="username" type="text" />
          </label>
          <button>Submit</button>
        </form>
        {this.state.repoList.map(repoName => (
          <div>repoName</div>
        ))}
      </Fragment>
    );
  }
}
