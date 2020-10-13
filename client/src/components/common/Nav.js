import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import EDlogo from "../../assets/EDlogo.jpg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

function Nav() {
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

        <Link to={!isAuthenticated && "/login"}>
          <div onClick={handleAuthentication} className="nav__option">
            <span className="nav__optionLineOne">
              Hello {!isAuthenticated ? "Guest" : userInfo.name}
            </span>
            <span className="nav__optionLineTwo">
              {isAuthenticated ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
