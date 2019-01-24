import React, { Component } from 'react';
import { Switch, Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom';

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
    this.addColor = this.addColor.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  addColor(newColor) {
    console.log(newColor);
    this.setState({ colors: [...this.state.colors, newColor] });
  }

  render() {
    const ColorListComponent = () => (
      <ColorList colors={this.state.colors} />
    );

    const NewColorComponent = (props) => (
      <NewColor {...props} addColor={this.addColor} />
    );

    return (
      <Switch>
        <Route exact path='/colors' component={ColorListComponent} />
        <Route exact path='/colors/new' component={NewColorComponent} />
        <Route exact path='/colors/:color' component={Color} />
      </Switch>
    );
  }
}

export default App;
