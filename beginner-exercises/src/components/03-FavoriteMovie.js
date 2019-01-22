import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange = (event) => {
    this.setState({ movie: event.target.value });
  }

  render() {
    let movieMessage = <p>Hey there. Enter your favorite movie.</p>;

    if (this.state.movie.length) {
      movieMessage = <p>My favorite movie is <span style={{ color: 'blue' }}>{this.state.movie}</span></p>;
    }
    return (
      <div>
        { movieMessage }
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
