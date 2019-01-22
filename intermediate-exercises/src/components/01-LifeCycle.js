import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this);
    this.state = {
      name: 'Pesto',
      changeMe: false,
    };
  }

  componentDidMount() {
    console.log('I\'m mounted!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!');
    console.log({ prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  changeName() {
    this.setState({...this.state, changeMe: !this.state.changeMe});
  }

  render() {
    return (
      <React.Fragment>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={this.changeName}>Click Me!</button>
      </React.Fragment>
    );
  }
}

export default LifeCycle;
