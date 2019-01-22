import React, { Component } from 'react';


class StopWatch extends Component {
  constructor(props){
    super(props)
    this.state = {'elapsedTime' : 0}
  }

  startTimer = () => {
  this.interval = setInterval(function(){
    console.log('getting called')
      this.setState({'elapsedTime' :this.state.elapsedTime+1});
    }.bind(this),1)
  }

  stopTimer = () => {
    clearInterval(this.interval)
  }

  clearTimer = () => {
    this.setState({'elapsedTime' : 0})
  }


  render() {
    return (
      <React.Fragment>
        <div>Stop Watch</div>
        <span>
          {this.state.elapsedTime}
          <button onClick = {this.startTimer}>
          Start
          </button>
          <button onClick = {this.stopTimer}>
          Stop
          </button>
          <button onClick = {this.clearTimer}>
            Clear
          </button>
        </span>
      </React.Fragment>
      
    );
  }
}

export default StopWatch;
