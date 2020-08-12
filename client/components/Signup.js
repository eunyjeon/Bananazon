
import React, { Component } from "react";
import { connect } from "react-redux";
import { createUserThunk } from "../store/newUser";

class SignupForm extends Component {
  constructor () {
    super()
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidMount() {
    this.props.newUser()
  }

  submitHandler(evt) {
    evt.preventDefault()
    const email = evt.target.email.value
    const password = evt.target.password.value
    const firstName = evt.target.firstName.value
    const lastName = evt.target.lastName.value
    this.props.newUser(email, password, firstName, lastName)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="New Password"
              required
            />
          </label>

          <label>
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
          </label>

          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  newUser: (email, password, firstName, lastName) =>
    dispatch(createUserThunk(email, password, firstName, lastName)),
});

export default connect(null, mapDispatch)(SignupForm);
