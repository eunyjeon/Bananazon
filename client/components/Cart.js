import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCartThunk } from "../store/cart";
export class Cart extends Component {
  constructor() {
    super();
    this.submitCartHandler = this.submitCartHandler.bind(this);
  }

  componentDidMount() {
    // hardcoded to test
    this.props.getCart(13);

    //this.props.getCart(this.props.user.id);
  }

  submitCartHandler(event) {
    console.log("Submit Cart Clicked!");
  }
  render() {
    console.log("cart? props", this.props);

    return (
      <div>
        <div>
          <h1>Your Shopping Cart! 🛒</h1>
          <NavLink to="/confirmationPage">
            <button type="submit" onClick={this.submitCartHandler}>
              {" "}
              Submit You Order!{" "}
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // user: state.user,
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  getCart: (userId) => dispatch(getCartThunk(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
