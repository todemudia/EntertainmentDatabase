import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EDlogo from "../../assets/EDlogo.jpg";
import { register } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  register: {
    backgroundColor: "rgb(19, 14, 14)",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  registerLogo: {
    marginTop: "20px",
    marginBottom: "20px",
    objectFit: "contain",
    width: "100px",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: "5px",
  },

  registerContainer: {
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

  registerButton: {
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

  loginButton: {
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

const Register = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
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
    <div className={classes.register}>
      <Link to="/">
        <img className={classes.registerLogo} src={EDlogo} alt="Company logo" />
      </Link>
      <div className={classes.registerContainer}>
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
          <button type="submit" className={classes.registerButton}>
            Register
          </button>
        </form>
        <p className={classes.errorMsg}>{message}</p>
        <p>
          By Registering you agree to the ED SITE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={signIn} className={classes.loginButton}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default Register;
