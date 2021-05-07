import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Search from "./Search";
import { Link, NavLink } from "react-router-dom";
import EDlogo from "../../assets/EDlogo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  nav: {
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#000",
    position: "sticky",
    top: "0",
    zIndex: "100",
  },
  navLogo: {
    height: "50px",
    borderRadius: "10px",
    width: "100px",
    objectFit: "contain",
    margin: "0 20px",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: "3rem",
  },
  navLink: {
    textDecoration: "none",
    color: "#eee",
    "&:hover": {
      color: "#d8412d",
    },
    fontSize: "1.1rem",
  },
  navOption: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
    marginRight: "20px",
    color: "white",
  },
  navOptionLineOne: {
    fontSize: "10px",
  },
  navOptionLineTwo: {
    fontSize: "13px",
    fontWeight: "800",
  },
  navSignInButton: {
    marginLeft: "1rem",
    padding: "5px",
    "&:hover": {
      cursor: "pointer",
      color: "#d8412d",
    },
  },
}));

function Nav() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userInfo = useSelector((state) => state.auth.user);
  const [user, setUser] = useState();

  useEffect(() => {
    if (isAuthenticated) {
      setUser(userInfo);
    }
  }, [userInfo]);

  const handleAuthentication = () => {
    if (user) {
      dispatch(logout());
    }
  };

  return (
    <div className={classes.nav}>
      <Link to="/" exact="true">
        <img className={classes.navLogo} src={EDlogo} alt="Company logo" />
      </Link>
      <Search />

      <nav className={classes.navLinks}>
        <div className={classes.navOption}>
          <NavLink
            className={classes.navLink}
            activeStyle={{ color: "#d8412d" }}
            to="/new"
          >
            New
          </NavLink>
        </div>
        <div className="navOption">
          <NavLink
            className={classes.navLink}
            activeStyle={{ color: "#d8412d" }}
            to="/favourites"
          >
            Favourites
          </NavLink>
        </div>

        <Link to={!isAuthenticated && "/login"}>
          <div onClick={handleAuthentication} className={classes.navOption}>
            <span className={classes.navOptionLineOne}>
              Hello {!isAuthenticated ? "Guest" : userInfo.name}
            </span>
            <span className={classes.navOptionLineTwo}>
              {isAuthenticated ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
