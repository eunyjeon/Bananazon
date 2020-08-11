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

  async componentDidMount() {
    await this.props.getUser();
    if (this.props.user.id) {
      const userId = this.props.user.id;
      await this.props.getCart(userId);
    }
  }

  submitCartHandler(event) {
    console.log("Submit Cart Clicked!");
  }

  render() {
    console.log("cart props", this.props);
    // console.log("cart? props", this.props);
    const cart = this.props.cart; // array like object
    if (cart && cart !== undefined) {
      const products = cart.products;
      // console.log('WHAT IS THIS PRODUCT', products)
    }
    return (
      <div>
        <div>
          <h1>Your Shopping Cart! 🛒</h1>
          <div>
            {cart && cart.products
              ? cart.products.map((product) => (
                  <div key={product.id}>{product.name}</div>
                ))
              : `Your cart is empty`}
          </div>
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
  cart: state.cart["0"],
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (userId) => dispatch(getCartThunk(userId)),
  getUser: () => dispatch(me()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
