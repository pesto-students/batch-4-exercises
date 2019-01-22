/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
// import { list } from 'postcss';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: ['The Godfather'],
    };
    this.addMoive = this.addMoive.bind(this);
  }

  addMoive(movieName) {
    const { movieList } = this.state;
    return [...movieList, movieName];
  }

  render() {
    const movieNamesAsListItems = this.addMoive('The Lord Of The Rings').reduce((listArray, movieName) => {
      listArray.push(<li>{movieName}</li>);
      return listArray;
    }, []);

    return (
      <ul className="movies-list">
        {movieNamesAsListItems}
      </ul>
    );
  }
}

export default MovieList;
