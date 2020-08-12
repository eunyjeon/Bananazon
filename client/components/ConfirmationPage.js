import React from 'react';
import { Link } from 'react-router-dom';
const ConfirmationPage = () => {
  return (
    <div>
      <div>Thanks for your Order! Your order number is ORDER ID HERE.</div>
      <p>Wait, are you sure you got everything?</p>
      <Link to="/products"> Click here to keep shopping.</Link>
    </div>
  );
};
export default ConfirmationPage;
