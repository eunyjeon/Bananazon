import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getCartThunk,
  deleteFromCartThunk,
  increaseCartThunk,
  decreaseCartThunk,
} from "../store/cart";
import { me } from "../store/user";

export class Cart extends Component {
  constructor() {
    super();
    this.submitCartHandler = this.submitCartHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.increaseHandler = this.increaseHandler.bind(this);
    this.decreaseHandler = this.decreaseHandler.bind(this);
    this.state = {
      clickCount: 0, //added to re-render
    };
  }

  async componentDidMount() {
    await this.props.getUser();
    if (this.props.user.id) {
      const userId = this.props.user.id;
      await this.props.getCart(userId);
    }
  }

  increaseHandler(productId) {
    console.log("increase!");
    if (this.props.cart.id !== undefined) {
      const orderId = this.props.cart.id;
      this.props.increaseItem(productId, orderId);
      this.setState({ ...this.state, clickCount: this.state.clickCount++ });
    }
  }

  decreaseHandler(productId) {
    console.log("decrease!");
    if (this.props.cart.id !== undefined) {
      const orderId = this.props.cart.id;
      this.props.decreaseItem(productId, orderId);
      this.setState({ ...this.state, clickCount: this.state.clickCount++ });
    }
  }

  async deleteHandler(productId) {
    console.log("deleting");

    if (this.props.cart.id !== undefined) {
      const orderId = this.props.cart.id;
      console.log("product in delete", productId);
      await this.props.deleteItem(orderId, productId);
    }
    // const orderId = this.props.cart.id;
    // await this.props.deleteItem(orderId, productId);
  }
  submitCartHandler(event) {
    console.log("Submit Cart Clicked!");
  }

  render() {
    console.log("cart props", this.props);
    const cart = this.props.cart; // array like object
    if (cart && cart !== undefined) {
      const products = cart.products;
    }
    return (
      <div>
        <div>
          <h1>Your Shopping Cart! 🛒</h1>
          <div>
            {cart && cart.products
              ? cart.products.map((product) => (
                  <div className="cartItem" key={product.id}>
                    <h4>{product.name}</h4>
                    <img src={product.imageUrl} />
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.orderItem.quantity}</p>
                    <button
                      type="button"
                      size="small"
                      onClick={() => this.increaseHandler(product.id)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      size="small"
                      onClick={() => this.decreaseHandler(product.id)}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => this.deleteHandler(product.id)}
                    >
                      Remove From Cart
                    </button>
                  </div>
                ))
              : `Your cart is empty`}
          </div>
          <NavLink to="/checkout">
            <button type="submit" onClick={this.submitCartHandler}>
              {" "}
              Proceed to Checkout!{" "}
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
  deleteItem: (orderId, productId) =>
    dispatch(deleteFromCartThunk(orderId, productId)),
  increaseItem: (productId, orderId) =>
    dispatch(increaseCartThunk(productId, orderId)),
  decreaseItem: (productId, orderId) =>
    dispatch(decreaseCartThunk(productId, orderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
