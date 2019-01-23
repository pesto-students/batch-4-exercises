import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux';
import { fetchRepos } from './actions/actions';

class App extends Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.fetchRepos('niinpatel');
  };

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button type="submit" onClick={this.handleFormSubmit}>
            Fetch Repos
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  repos: state.repos,
  error: state.error
});

const mapDispatchToProps = {
  fetchRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
