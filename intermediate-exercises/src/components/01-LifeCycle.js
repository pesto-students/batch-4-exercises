/* eslint-disable */
// will fix eslint issues later
import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

  componentDidMount() {
    console.log("I'm mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  render() {
    const { name } = this.state;
    return (
      <React.Fragment>
        <p>
          Good morning,
          {name}!
        </p>
        <button onClick={() => this.forceUpdate(null)}>Re Render Me!</button>
      </React.Fragment>
    );
  }
}

export default LifeCycle;
