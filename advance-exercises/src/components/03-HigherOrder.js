import React from 'react';
import PropTypes from 'prop-types';
import { height } from 'window-size';

function withMouse(Component) {
  class GetMouse extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mouse: { x: 0, y: 0 } };
    }

    captureMouse(event) {
      this.setState({
        mouse: {
          x: event.clientX,
          y: event.clientY,
        },
      });
    }

    render() {
      return (
        <div style={{ height: height, width: '900px' }} onMouseMove={this.captureMouse.bind(this)}>
          <Component mouse={this.state.mouse} />
        </div>
      );
    }
  }
  return GetMouse;
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container">
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
