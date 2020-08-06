import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProductThunk } from '../store/singleProduct';

export class SingleProduct extends Component {
  componentDidMount() {
    this.props.getSingleProduct(this.props.match.params.id);
  }

  render() {
    console.log('WHAT IS THIS PROPS', this.props);
    const name = this.props.product.name;
    return (
      <div>
        <div>
          hello
          {name}
          {/* <img src={this.product.imageUrl} /> */}
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
