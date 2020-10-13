import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import EDlogo from "../../assets/EDlogo.jpg";
import { login } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { error, msg } = useSelector((state) => state.error.msg);
  const id = useSelector((state) => state.error.id);

  useEffect(() => {
    if (id === "LOGIN_FAIL") {
      error ? setMessage(error) : setMessage(msg);
    }
  }, [msg]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(clearErrors());
      history.push("/");
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const register = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={EDlogo} alt="Company logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={onSubmit}>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            name="password"
            id="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p class={"login__error_msg"}>{message}</p>
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
