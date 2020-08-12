import React from 'react';
import { Link } from 'react-router-dom';
const ConfirmationPage = () => {
  return (
    <div>
      <div>
        Thanks for your Order! A confirmation has been sent to the email
        provided :D
      </div>
      <p>Wait, are you sure you got everything?</p>
      <Link to="/products"> Click here to keep shopping.</Link>
    </div>
  );
};
export default ConfirmationPage;
