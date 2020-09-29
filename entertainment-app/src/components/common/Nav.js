import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import EDlogo from "../../assets/EDlogo.jpg";

function Nav() {
  // const [show, handleShow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else handleShow(false);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);
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
        <Link to="/signin">
          <div className="nav__signIn"></div>
          <button className="nav__signInButton">Sign In</button>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
