/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

class Time extends React.PureComponent {
  render() {
    const { milliseconds } = this.props;
    const milliSeconds = milliseconds % 1000;
    const seconds = Math.round((milliseconds / 1000) % 60);
    const minutes = Math.round(((milliseconds / (1000 * 60)) % 60));
    const hours = Math.round(((milliseconds / (1000 * 60 * 60)) % 24));
    return (<h2>{hours}:{minutes}:{seconds}:{milliSeconds}</h2>);
  }
}

Time.prototype = {
  milliseconds: PropTypes.number,
};

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      milliSeconds: 0,
    };
    this.watchPaused = true;
    this.updateTime = this.updateTime.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  updateTime() {
    if (!this.watchPaused) {
      let { milliSeconds } = this.state;
      milliSeconds += 10;
      this.state.milliSeconds = milliSeconds;
      this.interval = setInterval(this.updateTime, 10);
      this.forceUpdate();
    }
  }

  startTimer() {
    this.watchPaused = false;
    this.updateTime();
  }

  pauseTimer() {
    this.watchPaused = false;
    clearInterval(this.interval);
  }

  render() {
    const { milliSeconds } = this.state;
    console.log('mslfsf', milliSeconds);
    return (
      <React.Fragment>
        <Time milliSeconds={milliSeconds} />
        <button onClick={this.startTimer}>Start Watch</button>
        <button onClick={this.pauseTimer}>Stop Watch</button>
      </React.Fragment>
    );
  }
}

export default StopWatch;
