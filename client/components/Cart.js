import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartThunk, deleteFromCartThunk } from "../store/cart";
import { me } from "../store/user";

export class Cart extends Component {
  constructor() {
    super();
    this.submitCartHandler = this.submitCartHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  async componentDidMount() {
    await this.props.getUser();
    if (this.props.user.id) {
      const userId = this.props.user.id;
      await this.props.getCart(userId);
    }
  }
  buttonHandler() {
    console.log("clicked item buttons");
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
                      onClick={this.buttonHandler}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      size="small"
                      onClick={this.buttonHandler}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
