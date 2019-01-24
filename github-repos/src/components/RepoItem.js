import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo: { name } }) => {
  return <li>{name}</li>;
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};
export default RepoItem;
