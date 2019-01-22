import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    // Properties object is called `props`. You can access it with `this.props`.
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    console.log(event.target.value);
    this.setState({ movie: event.target.value });
  }

  render() {
    const { movie } = this.state;
    const EnterMoviePrompt = <p>Hey there. Enter your favorite movie.</p>;
    const FavoriteMovie = (
      <p>
        My favorite movie is <span style={{ color: 'blue' }}>{movie}</span>
      </p>
    );

    return (
      <div>
        {movie.length === 0 ? EnterMoviePrompt : FavoriteMovie}
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
