import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import EDlogo from "../../assets/EDlogo.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log("signed in");
  };

  const register = (e) => {
    e.preventDefault();
    console.log("signed in");
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={EDlogo} alt="Company logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the ED SITE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your ED Account
        </button>
      </div>
    </div>
  );
};

export default Login;
