/* eslint-disable */
import React, { Fragment, Component } from "react";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      username: "",
      repos: []
    };
  }
  handleInputChange(evt) {
    const username = evt.target.value;
    this.setState(() => ({ username }));
  }
  handleSubmit(evt) {
    evt.preventDefault();
    (async () => {
      const repoList = await fetch(
        `https://api.github.com/users/${this.state.username}/repos`
      ).then(res => res.json());
      const repos = repoList.map(repo => repo.name);
      this.setState(() => ({ repos }));
    })();
  }
  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username :{" "}
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
          <button>Submit</button>
        </form>
        {this.state.repos.map(repoName => (
          <div>{repoName}</div>
        ))}
      </Fragment>
    );
  }
}
