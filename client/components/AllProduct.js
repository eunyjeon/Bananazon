import React from "react";
import { connect } from "react-redux";
import { allProductThunk } from "../store/allProduct";

export class AllProduct extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    console.log(this.props);
    return <div>Hello!</div>;
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(allProductThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);
