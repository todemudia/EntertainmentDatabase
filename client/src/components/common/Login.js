import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import EDlogo from "../../assets/EDlogo.jpg";
import { login } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

const useStyles = makeStyles((theme) => ({
  login: {
    backgroundColor: "rgb(19, 14, 14)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  loginLogo: {
    marginTop: "20px",
    marginBottom: "20px",
    objectFit: "contain",
    width: "100px",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: "5px",
  },

  loginContainer: {
    width: "300px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    border: "1px solid lightgray",
    padding: "20px",
    color: "white",
    "& > h1": {
      fontWeight: "500",
      marginBottom: "20px",
    },
    "& > form > h5": {
      marginBottom: "5px",
    },
    "& > form > input": {
      height: "30px",
      marginBottom: "10px",
      backgroundColor: "white",
      width: "98%",
    },
    "& > p": {
      marginTop: "15px",
      fontSize: "12px",
    },
  },

  loginButton: {
    background: "#d8412d",
    borderRadius: "2px",
    border: "1px solid",
    width: "100%",
    height: "30px",
    marginTop: "10px",
    borderColor: "#a3554d #853b31 #d8412d",
    fontWeight: "600",
    fontSize: "15px",
    color: "rgb(255, 249, 249)",
  },

  registerButton: {
    borderRadius: "2px",
    border: "1px solid",
    width: "100%",
    height: "30px",
    marginTop: "10px",
    borderColor: "darkgray",
  },

  errorMsg: {
    color: "#d8000c",
    textAlign: "center",
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
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
    <div className={classes.login}>
      <Link to="/">
        <img className={classes.loginLogo} src={EDlogo} alt="Company logo" />
      </Link>
      <div className={classes.loginContainer}>
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

          <button type="submit" className={classes.loginButton}>
            Sign In
          </button>
        </form>
        <p className={classes.errorMsg}>{message}</p>
        <p>
          By signing-in you agree to the ED SITE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className={classes.registerButton}>
          Create your ED Account
        </button>
      </div>
    </div>
  );
};

export default Login;
