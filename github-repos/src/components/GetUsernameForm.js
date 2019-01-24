import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRepos } from '../actions';
import PropTypes from 'prop-types';

class GetUsernameForm extends Component {
  state = {
    username: ''
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username } = this.state;
    this.props.fetchRepos(username);
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { username } = this.state;
    return (
      <form>
        <input
          type="text"
          value={username}
          onChange={this.handleInputChange}
          name="username"
          placeholder="Enter a github username  "
        />
        <button type="submit" onClick={this.handleFormSubmit}>
          Fetch Repos
        </button>
      </form>
    );
  }
}

GetUsernameForm.propTypes = {
  fetchRepos: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  fetchRepos
};

export default connect(
  null,
  mapDispatchToProps
)(GetUsernameForm);
