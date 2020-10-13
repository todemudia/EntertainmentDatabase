import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import EDlogo from "../../assets/EDlogo.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

class Register extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  signIn = (e) => {
    e.preventDefault();
    console.log("signed in");
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = this.state;

    // Create user object
    const newUser = {
      name,
      email,
      password,
    };

    // Attempt to register
    this.props.register(newUser);
  };

  render() {
    return (
      <div className="login">
        <Link to="/">
          <img className="login__logo" src={EDlogo} alt="Company logo" />
        </Link>
        <div className="login__container">
          <h1>Register</h1>

          <form onSubmit={this.onSubmit}>
            <h5>Name</h5>
            <input
              type="text"
              name="name"
              id="name"
              value={this.props.name}
              onChange={this.onChange}
            />

            <h5>E-mail</h5>
            <input
              type="email"
              name="email"
              id="email"
              value={this.props.email}
              onChange={this.onChange}
            />

            <h5>Password</h5>
            <input
              type="password"
              name="password"
              id="password"
              value={this.props.password}
              onChange={this.onChange}
            />

            <button type="submit" className="login__signInButton">
              Register
            </button>
          </form>
          <p>
            By Registering you agree to the ED SITE Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button onClick={this.signIn} className="login__registerButton">
            Create your ED Account
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});
export default connect(mapStateToProps, { register, clearErrors })(Register);
