import React from 'react';
import PropTypes from 'prop-types';

const RepoInfo = ({ repo }) => <li>{repo.name}</li>;

RepoInfo.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoInfo;
