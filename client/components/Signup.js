import React, { Component } from "react";
import { connect } from "react-redux";

export class Signup extends Component {

  render() {
    return (
      <form>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>

        <label>
          Password:
        </label>
        <input
            type="password"
            name="password"
            placeholder="New Password"
            required
          />

          <label>
            First Name:
          </label>
          <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
          />
          <label>
            Last Name:
          </label>
          <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
          />

          {/* <label>
            Phone Number:
          </label>
          <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              required
          />

          <label>
            Address:
          </label>
          <input
              type="text"
              name="address"
              placeholder="Address"
              required
          />

          <label>
            Payment Information:
          </label>
          <input
              type="number"
              name="cardNumber"
              placeholder="Card Number"
              required
          /> */}
      </form>
    )
  }
}
