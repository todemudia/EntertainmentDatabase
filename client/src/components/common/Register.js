import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import EDlogo from "../../assets/EDlogo.jpg";
import { register } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { error, msg } = useSelector((state) => state.error.msg);
  const id = useSelector((state) => state.error.id);

  useEffect(() => {
    if (id === "REGISTER_FAIL") {
      if (error) {
        setMessage(error);
      } else {
        setMessage(msg);
      }
    } else {
      setMessage(null);
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(clearErrors());
      history.push("/");
    }
  });

  const signIn = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={EDlogo} alt="Company logo" />
      </Link>
      <div className="login__container">
        <h1>Register</h1>

        <form onSubmit={onSubmit}>
          <h5>Name</h5>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInButton">
            Register
          </button>
        </form>
        <p class={"login__error_msg"}>{message}</p>
        <p>
          By Registering you agree to the ED SITE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={signIn} className="login__registerButton">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Register;
