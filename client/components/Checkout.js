import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

// import STRIPE_PUBLISHABLE from './constants/stripe';
// import PAYMENT_SERVER_URL from './constants/server';

const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_test_51HF04kIlCHoBp0F6DoZKPgjEGhuCSTFpw6yuJK8MTvf6JoQKwUtPj9tAc4pGJEco1aUy5f0pF7OFpB2uAyVswCsq00iQ6HtvF4'
    : 'pk_test_51HF04kIlCHoBp0F6DoZKPgjEGhuCSTFpw6yuJK8MTvf6JoQKwUtPj9tAc4pGJEco1aUy5f0pF7OFpB2uAyVswCsq00iQ6HtvF4';
const PAYMENT_SERVER_URL = 'http://localhost:8080';
const CURRENCY = 'USD';

const fromEuroToCent = (amount) => amount * 100;

const successPayment = (data) => {
  alert('Payment Successful');
};

const errorPayment = (data) => {
  alert('Payment Error');
};

const onToken = (amount, description) => (token) =>
  axios
    .put(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount),
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ orderId, description, amount }) => (
  <StripeCheckout
    name={'Thank you for visiting our store!'}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, orderId)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
