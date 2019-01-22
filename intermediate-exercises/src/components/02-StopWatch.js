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

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      timerStarted: false,
      lapses: [],
    }
  }

  start() {
    this.setState((state) => ({
      timerStarted: true,
    }));
  }

  stop() {
    this.setState((state) => {
      const lapsedTime = state.currentTime;
      return {
        timerStarted: false,
        lapses: [...state.lapses, lapsedTime],
      }
    });
  }

  clear() {
    this.setState(() => ({
      currentTime: 0,
      timerStarted: false,
      lapses: [],
    }));
  }

  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.timerStarted) {
        this.setState((state) => ({
          currentTime: state.currentTime + 1,
        }));
      }
    }, 1000);

  }

  render() {
    const getButton = () => {
      if (this.state.timerStarted) {
        return <button onClick={this.stop.bind(this)}>Stop</button>
      }
      return <button onClick={this.start.bind(this)}>Start</button>
    };

    return (
      <React.Fragment>
        <div>Stop Watch</div>
        <p>{this.state.currentTime}</p>
        {getButton()}
        <button onClick={this.clear.bind(this)}>Clear</button>
        <p>Lapses:</p>
        <ul>
          {this.state.lapses.map(value => <li key={value}>{value}</li>)}
        </ul>
      </React.Fragment>
    );
  }
}

export default StopWatch;
