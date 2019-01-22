import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    return (
      <ul className="movies-list">
        <li className="movie-list-item">The Godfather</li>
        <li className="movie-list-item">Spiderman</li>
      </ul>
    );
  }
}

export default MovieList;
