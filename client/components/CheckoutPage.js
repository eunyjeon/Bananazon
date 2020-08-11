import React from 'react';
import { connect } from 'react-redux';
import Checkout from './Checkout';

const CheckoutPage = (props) => {
  const { successPayment, handleSubmit } = props;
  const cart = props.cart.product;
  console.log(cart);
  return (
    <div>
      <div>
        <p>You're almost there! Please fill out the info bellow:</p>
        <form
          onSubmit={(event) => handleSubmit(event, props.user.id, props.cart)}
          id="order-contact"
        >
          <div>
            <label className="order-contact-label">First Name</label>
            <input type="text" name="name" className="order-form" />
          </div>

          <div>
            <label className="order-contact-label">Last Name</label>
            <input type="text" name="name" className="order-form" />
          </div>
          <br />
          <div>
            <label className="order-contact-label">Address Line 1</label>
            <input type="text" name="name" className="order-form" />
          </div>
          <br />
          <div>
            <label className="order-contact-label">Address Line 2</label>
            <input type="text" name="name" className="order-form" />
          </div>
          <br />
          <div>
            <label className="order-contact-label">City</label>
            <input type="text" name="name" className="order-form" />
          </div>
          <br />
          <div>
            <label className="order-contact-label">State</label>
            <input type="text" name="name" className="order-form" />
          </div>
          <br />
          <div>
            <label className="order-contact-label">Zip Code</label>
            <input type="text" name="name" className="order-form" />
          </div>
          <br />
        </form>
        <Checkout
          name="Confirm your Order"
          description="Use 4242424242424242"
          amount={0}
          successPayment={successPayment}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart,
  user: state.user,
});
// const mapDispatchToProps = (dispatch) => ({
//   handleSubmit(event, userId, cart) {},
// });
export default connect(mapStateToProps, null)(CheckoutPage);
