import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { allProductThunk } from "../store/allProduct";

export class AllProduct extends React.Component {
  constructor() {
    super();
    this.addToCartHandler = this.addToCartHandler.bind(this);
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  addToCartHandler(event) {
    console.log("Add To Cart Clicked!");

  }

  render() {
    const products = this.props.products;
    console.log(this.props);

    return (
      <div>
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h2> Product: {product.name}</h2>
              <img src={product.imageUrl} />
              <h3>Price : ${product.price}</h3>
            </Link>
            <button onClick={this.addToCartHandler}> Add To Cart</button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(allProductThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);
