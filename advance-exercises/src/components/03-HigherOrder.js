
import React from 'react';
import PropTypes from 'prop-types';
import { isThisISOWeek } from 'date-fns';

function withMouse(Component) {
  return class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
      };
      this.onMouseUpdate = this.onMouseUpdate.bind(this);
    }

    onMouseUpdate(event) {
      this.setState({ x: event.clientX, y: event.clientY })
    }

    render() {
      return <Component mouse={this.state} onMouseMove={this.onMouseUpdate}></Component>
    }
  };
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container" onMouseMove={this.props.onMouseMove}>
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
            <h1>We don&#39;t know the mouse position yet :(</h1>
          )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
