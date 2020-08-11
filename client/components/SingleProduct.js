import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getSingleProductThunk,
  increaseQuantity,
  decreaseQuantity,
} from "../store/singleProduct";
import { getCartThunk, createCartThunk, addToCartThunk } from "../store/cart";

export class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      subtotal: 0,
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.getSubtotal = this.getSubtotal.bind(this);
    this.addToCartHandler = this.addToCartHandler.bind(this);
    this.cartChecker = this.cartChecker.bind(this);
  }

  cartChecker() {}

  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }
  async addToCartHandler() {
    console.log("Add To Cart Clicked!");

    const productId = this.props.match.params.id;
    const quantity = this.state.quantity;
    // const userId = window.localStorage.getItem("userId");
    const userId = 1; // hardcoded for testing
    await this.props.getCart(userId);
    if (this.props.cart == false) {
      await this.props.createCart(userId);
      await this.props.getCart(userId);
      const orderId = this.props.cart[0].id;
      await this.props.addToCart(orderId, productId, quantity);
    } else {
      const orderId = this.props.cart[0].id;

      await this.props.addToCart(orderId, productId, quantity);
    }
    console.log("this.props.cart", this.props.cart);
  }

  increase() {
    this.setState({ ...this.state, quantity: (this.state.quantity += 1) });
    this.getSubtotal();
  }
  decrease() {
    if (this.state.quantity === 0) {
      this.getSubtotal();
    } else {
      this.setState({ ...this.state, quantity: (this.state.quantity -= 1) });
      this.getSubtotal();
    }
  }
  getSubtotal() {
    this.setState({
      ...this.state,
      subtotal: (this.state.quantity * this.props.product.price).toFixed(2),
    });
  }

  render() {
    console.log("props in singleproduct", this.props);
    const { name, imageUrl, description, category, price } = this.props.product;
    const quantity = this.state.quantity;
    const subtotal = this.state.subtotal;
    return (
      <div>
        <div>
          <h2>{name}</h2>
          <img src={imageUrl} />
          <p>Price: {price}</p>
          <p>Category: {category}</p>
          <p>Product Info: {description}</p>
        </div>
        <div>
          <p>Quantity: {quantity}</p>
          <p>Subtotal: {subtotal} </p>
          <button type="button" size="small" onClick={this.increase}>
            +
          </button>
          <button type="button" size="small" onClick={this.decrease}>
            -
          </button>
          <NavLink to="/cart">
          <button type="submit" onClick={this.addToCartHandler}>
            Add To Cart
          </button>
          </NavLink>
        </div>
      </div>
    );
  }
}
// on "addtocart" submit, we want to POST a request to database AND local storage, reset view, and
// redirect to cart component - > this might eleminate the need to reset.
// ^ see if our window.localstorage object has orderId, if NOT then we create an orderId and set it in the local storage
// ^ use utility functions
// ^ while checking, we need to update localState to quantity 0, rerendering the quantity view
// Local state in SingleProduct for quantity, productId/info
//
const mapStateToProps = (state) => ({
  product: state.product,
  cart: state.cart,
});
const mapDispatchToProps = (dispatch) => ({
  getSingleProduct: (id) => dispatch(getSingleProductThunk(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
  getCart: (userId) => dispatch(getCartThunk(userId)),
  createCart: (userId) => dispatch(createCartThunk(userId)),
  addToCart: (orderId, productId, quantity) =>
    dispatch(addToCartThunk(orderId, productId, quantity)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
