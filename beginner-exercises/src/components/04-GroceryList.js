import React from 'react';
import GroceryListItem from './GroceryListItem';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      addItemInput: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.clearGroceryList = this.clearGroceryList.bind(this);
    this.addNewGroceryItem = this.addNewGroceryItem.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      addItemInput: event.target.value,
    });
  }

  clearGroceryList() {
    this.setState({
      groceries: [],
    });
  }

  addNewGroceryItem() {
    this.setState(prevState => ({
      groceries: [...prevState.groceries, { name: prevState.addItemInput }],
    }));
  }

  render() {
    const { groceries } = this.state;

    const groceriesComponents = groceries.map(item => (
      <GroceryListItem grocery={item} key={item.name} />
    ));

    return (
      <div>
        <label htmlFor="add-item-input">Add an item:</label>
        {' '}
        <input type="text" name="add-item-input" onChange={this.handleInputChange} />
        <button type="submit" onClick={this.addNewGroceryItem}>
          Add
        </button>
        {/** will fix later */}
        {/* eslint-disable-next-line */}
        <button type="reset" onClick={this.clearGroceryList}>
          Clear All
        </button>
        {groceriesComponents}
      </div>
    );
  }
}

export default GroceryList;
