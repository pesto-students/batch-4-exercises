import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NewColor from './NewColor';
import Header from './MainHeading';

import '../styles/ColorList.css';

const ColorList = (props) => {
  const colorLinks = props.colors.map(color => (
    <li key={color.hex}>
      <Link to={`/colors/${color.name}`}>{color.name}</Link>
    </li>
  ));
  const newColorPage = () => <NewColor addColor={props.handleAdd} />;
  const MainHeader = () => Header(colorLinks);

  return (
    <Router>
      <Switch>
        <div className="App">
          {props.children}
          <Route path="/colors/new" component={newColorPage} />
          <Route exact path="/" component={MainHeader} />
        </div>
      </Switch>
    </Router>
  );
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default ColorList;
