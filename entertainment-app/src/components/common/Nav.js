import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import EDlogo from "../../assets/EDlogo.jpg";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={EDlogo} alt="Company logo" />
      <input type="text" placeholder="Search..." className="searchbox" />
      <nav className="nav__link">
        <NavLink activeClassName="selected" exact to="/">
          Home
        </NavLink>
      </nav>
    </div>
  );
}

export default Nav;
