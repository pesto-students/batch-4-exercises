import React, { Component } from 'react';

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

class TimeDisplay extends Component {
  render() {
    return (
      <p>{ `${this.props.minutes} : ${this.props.seconds}` }</p>
    );
  }
}

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.getTimeInMinutesAndSeconds = this.getTimeInMinutesAndSeconds.bind(this);
    this.addLeadingZero = this.addLeadingZero.bind(this);
    this.startOrStop = this.startOrStop.bind(this);
    this.state = {
      seconds: 0,
      running: false,
      interval: null,
    };
  }

  addLeadingZero(number) {
    if (number < 10) {
      return `0${number}`;
    }
    return `${number}`;
  }

  getTimeInMinutesAndSeconds() {
    const secondsElapsed = this.state.seconds;
    const minutes = parseInt(secondsElapsed / 60, 10);
    const seconds = secondsElapsed % 60;

    return {
      minutes: this.addLeadingZero(minutes),
      seconds: this.addLeadingZero(seconds),
    }
  }

  startOrStop() {
    let seconds = this.state.seconds;
    let running = this.state.running;

    if (this.state.running) {
      clearInterval(this.state.interval);
    } else {

      const interval = setInterval(() => {
        seconds += 1;
        this.setState({
          ...this.state,
          seconds,
        })
      },1000);

      this.setState({
        ...this.state,
        interval: interval,
      });
    }

    running = !running;
    this.setState({
      ...this.state,
      running,
    });
  }
  
  render() {
    const { minutes, seconds } = this.getTimeInMinutesAndSeconds();
    const buttonText = this.state.running ? 'Stop' : 'Start';
    return (
      <div className="stop-watch-container">
        <h1>Stop Watch</h1>
        <TimeDisplay minutes={minutes} seconds={seconds}></TimeDisplay>
        <button id="start-stop" onClick={this.startOrStop}>{ buttonText }</button>
      </div>
    );
  }
}

export default StopWatch;
