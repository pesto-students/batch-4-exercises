import React from "react";

/*
  In this exercises, you'll will make a reactive grocery list.

  Task 1: Fill the `return` of `GroceryList` render method. It should return
        a list of `GroceryListItem`. You need to display the groceries names
        using `this.props` in `GroceryListItem`. We already prepared the variable
        `groceriesComponents` inside `render` method containing a list of these items for you.


  Task 2: Create an input box and a button. User should be able to add more grocery items and click
          the `Add` button to add it to the list displaying the item.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { name: "Apples", purcased: false },
        { name: "KitKat", purcased: false },
        { name: "Red Bull", purcased: false }
      ]
    };

    this.addGrocery = this.addGrocery.bind(this);
    this.clearAllList = this.clearAllList.bind(this);
    this.purchaseGrocery = this.purchaseGrocery.bind(this);
  }

  addGrocery() {
    const groceryName = this.refs.groceryInput.nodeValue;
    const newGrocery = {
      name: groceryName,
      purchased: false
    };
    this.setState(prevState => {
      const oldGroceries = prevState.groceries;
      return {
        groceries: [...oldGroceries, newGrocery]
      };
    });
  }

  clearAllList() {
    this.setState(() => {
      groceries: [];
    });
  }

  purchaseGrocery(event) {
    const groceryName = event.target.value;
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map(item => (
      <GroceryListItem grocery={item} buyItem={this.purchaseGrocery} />
    ));
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <label for="grocery">Grocery: </label>
        <input type="text" ref="groceryInput" name="grocery" />
        <button onClick={this.addGrocery}>Add Grocery</button>
        <button onClick={this.clearAllList}>Clear List</button>
      </div>
    );
  }
}

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={this.props.grocery} onClick={this.props.buyItem}>
        {this.props.grocery}
      </li>
    );
  }
}

export default GroceryList;
