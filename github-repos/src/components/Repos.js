import React, { Component } from 'react';
import { connect } from 'react-redux';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

class Repos extends Component {
  render() {
    const { loading, repos, error } = this.props;
    if (loading) {
      return <p>loading...</p>;
    } else if (error) {
      return <p style={{ color: 'red' }}>{error}</p>;
    } else {
      return (
        <ul>
          {repos.map(repo => {
            return <RepoItem repo={repo} key={repo.name} />;
          })}
        </ul>
      );
    }
  }
}

Repos.propTypes = {
  loading: PropTypes.bool.isRequired,
  repos: PropTypes.array.isRequired,
  error: PropTypes.string
};

Repos.defaultProps = {
  error: null
};

const mapStateToProps = state => ({
  loading: state.loading,
  repos: state.repos,
  error: state.error
});

export default connect(
  mapStateToProps,
  null
)(Repos);
