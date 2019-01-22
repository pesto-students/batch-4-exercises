import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickToggle: false,
    };

    this.updateClickToggle = this.updateClickToggle.bind(this);
  }

  updateClickToggle() {
    this.setState(prevState => ({
      clickToggle: !prevState.clickToggle,
    }));
  }

  render() {
    const {
      grocery: { name },
    } = this.props;

    const { clickToggle } = this.state;

    return (
      // eslint-disable-next-line
      <li className={clickToggle ? 'link--active' : ''} onClick={this.updateClickToggle}>
        {name}
      </li>
    );
  }
}

GroceryListItem.propTypes = {
  grocery: PropTypes.name.string.isRequired,
};

export default GroceryListItem;
