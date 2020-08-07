import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class Cart extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Your Shopping Cart!</h1>
          <Redirect to="/confirmationPage">A place to go!</Redirect>
        </div>
      </div>
    );
  }
}
