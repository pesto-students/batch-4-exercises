import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem('colors')) {
      this.setState({
        colors: JSON.parse(localStorage.getItem('colors')),
      });
    }
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] }, () => {
      localStorage.setItem('colors', JSON.stringify(this.state.colors));
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={this.state.colors} handleAdd={this.handleAdd} />
        </Route>

        <Route
          path="/colors/new"
          render={props => <NewColor addColor={this.handleAdd} {...props} />}
        />

        {this.state.colors.map((color) => {
          return (
            <Route
              path={`/colors/${color.name}`}
              key={color.name}
              render={(props) => {
                return <Color color={color} {...props} />;
              }}
            />
          );
        })}
      </Switch>
    );
  }
}

export default App;
