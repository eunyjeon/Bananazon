import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getSingleProductThunk,
  increaseQuantity,
  decreaseQuantity,
} from '../store/singleProduct';

export class SingleProduct extends Component {
  constructor() {
    super();
    this.state = {
      subtotal: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.getSubtotal = this.getSubtotal.bind(this);
  }
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
    // we call this.getSubtotal when we refresh but
    this.getSubtotal();
  }
  async increase() {
    await this.props.increaseQuantity(this.props.match.params.id);
    this.getSubtotal();
  }
  async decrease() {
    await this.props.decreaseQuantity(this.props.match.params.id);
    this.getSubtotal();
  }
  getSubtotal() {
    if (!this.props.product.quantities || this.props.quantities === 0) {
      return 0;
    } else if (this.props.product.quantities) {
      this.setState({
        ...this.state,
        subtotal: this.props.product.price * this.props.product.quantities,
      });
    }
  }
  render() {
    const {
      name,
      imageUrl,
      description,
      category,
      price,
      quantities,
    } = this.props.product;
    const subtotal = 0;
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
          <p>Quantity: {quantities}</p>
          <p>Subtotal: {this.state.subtotal} </p>
          <button type="button" size="small" onClick={this.increase}>
            +
          </button>
          <button type="button" size="small" onClick={this.decrease}>
            -
          </button>

          <button type="submit">Add to Cart</button>
        </div>
      </div>
    );
  }
}
// on "addtocart" submit, we want to POST a request to database AND local storage, reset view, and
// redirect to cart component - > this might eleminate the need to reset.
// ^ see if our window.localstorage object has orderId, if NOT then we create an orderId and set it in the local storage
// ^ use utility functions
// Local state in SingleProduct for quantity, productId/info
const mapStateToProps = (state) => ({
  product: state.product,
});
const mapDispatchToProps = (dispatch) => ({
  getSingleProduct: (id) => dispatch(getSingleProductThunk(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
