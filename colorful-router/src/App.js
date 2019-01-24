import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

const redirectToURL = (url) => () => (<Redirect to={url} />);

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

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    const colorListComponent = () => (
      <ColorList colors={this.state.colors} />
    );
    const newColorComponent = (newColorProps) => {
      const { history } = newColorProps;
      return (<NewColor {...newColorProps} addColor={this.handleAdd} history={ history } />);
    };
    const colorComponent = (colorProps) => {
      const { match: {params: { color } } } = colorProps;
      const [ colorObject ] = this.state.colors.filter(el => el.name === color);

      return colorObject ? <Color {...colorProps} color={colorObject} /> : <Redirect to="/" />;
    };
    return (
      <Switch>
        <Redirect exact from="/" to="/colors" />
        <Route exact path="/colors" render={colorListComponent} />
        <Route path="/colors/new" render={newColorComponent} />
        <Route path="/colors/:color" render={colorComponent} />
        <Route render={redirectToURL('/')} />
      </Switch>
    );
  }
}

export default App;
