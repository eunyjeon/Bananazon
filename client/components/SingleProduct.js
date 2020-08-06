import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProductThunk } from '../store/singleProduct';

export class SingleProduct extends Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }

  render() {
    console.log('WHAT IS THIS PROPS', this.props);
    const { name, imageUrl, description, category, price, quantities } = this.props.product;
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
          <button type='button'>+</button>
          <button type='button'>-</button>
          <button type='submit'>Add to Cart</button> 
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
});
export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
