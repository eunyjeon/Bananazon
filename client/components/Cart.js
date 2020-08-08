import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Cart extends Component {
  submitCartHandler(event) {
    event.preventDefault();
    console.log('Submit Cart Clicked!');
  }
  render() {
    return (
      <div>
        <div>
          <h1>Your Shopping Cart! 🛒</h1>
          <NavLink to="/confirmationPage">
            <button type="submit"> hello </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
