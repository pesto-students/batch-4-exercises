import React, { Component } from "react";

import "../styles/Form.css";
// import api from '../api';

export default class Form extends Component {
  constructor(props) {
    super(props);
    state = {
      name: "",
      receivePromotions: true
    };
    this.receivePromotions = this.receivePromotions.bind(this);
  }

  handlePromotions() {
    this.setState(state => ({ receivePromotions: !state.receivePromotions }));
  }

  render() {
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
        <h2>Request Information</h2>
        <input
          data-testid="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
        />
        <div>
          <input
            checked={this.state.receivePromotions}
            data-testid="checked"
            type="checkbox"
            onClick={this.handlePromotions}
          />
          <p data-testid="promotionsP" className="promotions">
            Receive Promotions
          </p>
        </div>
        <button type="submit" data-testid="submitButton">
          Submit
        </button>
      </form>
    );
  }
}
