import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Checkout from './Checkout';

const CheckoutPage = (props) => {
  const { successPayment } = props;
  // const cart = props.cart.product ?<-- need to access cart here
  return (
    <div>
      <div>Shipping and Contact Info Form Goes Here!</div>
      <Checkout
        name="Confirm your Order"
        description={
          "Please don't add your actual credit card information, working on test api stuffs"
        }
        amount={1}
        successPayment={successPayment}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  // cart: state.cart,
  // need to make sure we're using the correct cart
  //after order is confirmed need to reset the cart to empty, via dispatch
});
const mapDispatchToProps = (dispatch) => ({
  handleSubmit(event) {
    //dispatch clear the cart?
  },
});
export default connect(null, null)(CheckoutPage);
