import React, { Component } from "react";

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: "" };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    const movieName = event.target.value;
    this.setState(() => ({ movie: movieName }));
  }

  render() {
    if (this.state.movie.length === 0) {
      return (
        <div>
          <p>Hey there. Enter your favorite movie.</p>
        </div>
      );
    }
    return (
      <div>
        <p>
          My favorite movie is
          <span style={{ color: "blue" }}>{this.state.movie}</span>
        </p>
        <label for="name">Movie name:</label>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
