/* eslint-disable import/no-unresolved,import/no-extraneous-dependencies */
import React, { Component } from 'react';

import '../styles/Form.css';
import api from '../api';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
    email: '',
    checked: true
  };

  handleInputChange = ({ currentTarget }) => {
    this.setState({
      [currentTarget.name]: currentTarget.value
    });
  };
  render() {
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
        <h2>Request Information</h2>
        <input
          data-testid="name"
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />
        <input
          data-testid="number"
          type="number"
          placeholder="number"
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <input
          data-testid="email"
          type="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <label>
          <input
            data-testid="checked"
            type="checkbox"
            checked={this.state.checked}
            name="checked"
            onChange={this.handleInputChange}
          />
          <p data-testid="promotionsP" className="promotions">
            Receive Promotions
          </p>
        </label>
        <button type="submit" data-testid="submitButton">
          Submit
        </button>
      </form>
    );
  }
}
