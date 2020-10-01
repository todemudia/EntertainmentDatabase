import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import EDlogo from "../../assets/EDlogo.jpg";

function Nav() {
  const [user] = useState();
  const handleAuthentication = () => {
    if (user) {
      console.log("user");
    }
  };
  return (
    <div className="nav">
      <Link to="/" exact>
        <img className="nav__logo" src={EDlogo} alt="Company logo" />
      </Link>
      <div className="nav__search">
        <input
          type="text"
          placeholder="Search..."
          className="nav__searchInput"
        />
        <SearchIcon className="nav__searchIcon" />
      </div>

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
