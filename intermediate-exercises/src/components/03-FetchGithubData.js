import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import axios from 'axios';

/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => {
  return (
    <ul>
      {repos.map(repo => (
        <RepoItem repo={repo} key={repo.name} />
      ))}
    </ul>
  );
};

GithubRepos.propTypes = {
  repos: PropTypes.array.isRequired,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
  }

  fetchReposAndUpdate = () => {
    const { username } = this.state;
    const apiEndPoint = `https://api.github.com/users/${username}/repos`;

    axios
      .get(apiEndPoint)
      .then(response => response.data)
      .then(repos => {
        this.setState({ repos });
      });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { repos } = this.state;
    return (
      <div>
        <input type="text" name="username" onChange={this.handleInputChange} />
        <button onClick={this.fetchReposAndUpdate}>Get Repos</button>

        <GithubRepos repos={repos} />
      </div>
    );
  }
}

export default UsernameForm;
