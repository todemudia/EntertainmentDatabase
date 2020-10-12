import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import EDlogo from "../../assets/EDlogo.jpg";
import Search from "./Search";

function Nav() {
  const [user] = useState();
  const handleAuthentication = () => {
    if (user) {
      console.log("user");
    }
  };
  return (
    <div className="nav">
      <Link to="/" exact="true">
        <img className="nav__logo" src={EDlogo} alt="Company logo" />
      </Link>
      <Search />

      <nav className="nav__links">
        <div className="nav__option">
          <NavLink
            className="nav__link"
            activeStyle={{ color: " #d8412d" }}
            to="/new"
          >
            New
          </NavLink>
        </div>
        <div className="nav__option">
          <NavLink
            className="nav__link"
            activeStyle={{ color: " #d8412d" }}
            to="/favourites"
          >
            Favourites
          </NavLink>
        </div>

        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="nav__option">
            <span className="nav__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="nav__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
