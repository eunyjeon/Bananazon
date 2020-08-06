import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSingleProductThunk,
  increaseQuantity,
  decreaseQuantity,
} from "../store/singleProduct";

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
    // initial render is NAN
    // but the subtotal calculates after we click plus minus buttons
    this.setState({
      ...this.state,
      subtotal: this.props.product.price * this.props.product.quantities,
    });
  }
  render() {
    console.log("WHAT IS THIS PROPS", this.props);
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

const mapStateToProps = (state) => ({
  product: state.product,
});
const mapDispatchToProps = (dispatch) => ({
  getSingleProduct: (id) => dispatch(getSingleProductThunk(id)),
  increaseQuantity: (id) => dispatch(increaseQuantity(id)),
  decreaseQuantity: (id) => dispatch(decreaseQuantity(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
