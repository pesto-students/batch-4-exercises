/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    const favoriteMovie = event.target.value;
    this.setState({ movie: favoriteMovie });
  }

  render() {
    const { movie } = this.state;
    const headingForFavoriteMovie = movie.length === 0
      ? <p>Hey there. Enter your favorite movie.</p>
      : <p>My favorite movie is <span style={{ color: 'blue' }}>{movie}</span></p>;
    return (
      <div>
        {headingForFavoriteMovie}
        <input type="text" name="favoriteMovie" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
