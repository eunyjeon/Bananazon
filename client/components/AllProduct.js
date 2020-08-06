import React from "react";
import { connect } from "react-redux";
import { allProductThunk } from "../store/allProduct";

export class AllProduct extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    const products = this.props.products
    console.log(this.props);

    return (
      <div>
        {
          products.map(product => (
            <div key={product.id} className="product-card">
              <h2>Product : {product.name}</h2>
              <img src={product.imageUrl} />
              <h3>Price : ${product.price}</h3>
            </div>
            )
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(allProductThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);


