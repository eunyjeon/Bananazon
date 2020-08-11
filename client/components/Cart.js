import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartThunk } from "../store/cart";
import { me } from "../store/user";

export class Cart extends Component {
  constructor() {
    super();
    this.submitCartHandler = this.submitCartHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.user.id) {
      const userId = this.props.user.id;
      this.props.getCart(userId);
    }
  }

  submitCartHandler(event) {
    console.log("Submit Cart Clicked!");
  }

  render() {
    console.log("cart? props", this.props);
    const cart = this.props.cart[0];
    if (cart !== undefined) {
      const products = cart.products;
    }
    return (
      <div>
        <div>
          <h1>Your Shopping Cart! 🛒</h1>
          <NavLink to="/confirmationPage">
            <button type="submit" onClick={this.submitCartHandler}>
              {" "}
              Submit You Order!{" "}
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (userId) => dispatch(getCartThunk(userId)),
  getUser: () => dispatch(me()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
