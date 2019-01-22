import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return (
      <ul className="movies-list">
        <li>The Godfather</li>
        <li>The Shawshank Redemption</li>
        <li>Interstellar</li>
      </ul>
    );
  }
}

export default MovieList;
