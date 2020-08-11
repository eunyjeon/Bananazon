import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Checkout from './Checkout';
const CheckoutPage = (props) => {
  const { successPayment } = props;
  const cart = props.cart.product;
  console.log(cart);
  return (
    <div>
      <div>Shipping and Contact Info Form Goes Here!</div>
      <Checkout
        name="Confirm your Order"
        description="Use 4242424242424242"
        amount={0}
        successPayment={successPayment}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart,
  // need to make sure we're using the correct cart
  //after order is confirmed need to reset the cart to empty, via dispatch
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, null)(CheckoutPage);
