/* eslint-disable import/no-unresolved,import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/* eslint-disable */

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
    };
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      mainColor: (prevState.on && 'red') || 'blue',
      on: !prevState.on,
    }));
  };

  handleStrings = string => {
    return Boolean(string);
  };

  handleInputChange = ({ currentTarget }) => {
    this.setState({
      input: currentTarget.value,
    });
  };

  render() {
    const { input, mainColor, on } = this.state;
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <h2>{input}</h2>
        <p className={mainColor}>
          Main color is
          {mainColor}
        </p>
        <button type="button" onClick={this.handleButtonClick}>
          Click
        </button>
        <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
        <input type="text" name="input" onChange={this.handleInputChange} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { hide, address } = this.props;
    if (hide) {
      return null;
    }
    return <a href={address}>here is a link</a>;
  }
}

Link.propTypes = {
  hide: PropTypes.bool,
  address: PropTypes.string,
};

Link.defaultProps = {
  hide: false,
  address: '',
};

export default App;
