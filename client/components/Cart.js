import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Cart extends Component {
  constructor() {
    super();
    this.submitCartHandler = this.submitCartHandler.bind(this);
  }
  submitCartHandler(event) {
    console.log('Submit Cart Clicked!');
  }
  render() {
    return (
      <div>
        <div>
          <h1>Your Shopping Cart! 🛒</h1>
          <NavLink to="/confirmationPage">
            <button type="submit" onClick={this.submitCartHandler}>
              {' '}
              Submit You Order!{' '}
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
