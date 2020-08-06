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
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }
  increase() {
    this.props.increaseQuantity(this.props.match.params.id);
  }
  decrease() {
    this.props.decreaseQuantity(this.props.match.params.id);
  }
  render() {
    console.log('WHAT IS THIS PROPS', this.props);
    const {
      name,
      imageUrl,
      description,
      category,
      price,
      quantities,
    } = this.props.product;
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
