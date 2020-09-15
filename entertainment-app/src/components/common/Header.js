import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const activeStyle = { color: "orange" };
  return (
    <nav>
      <SearchBar />
      <NavLink activeStyle={activeStyle} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/nowplaying">
        Now Playing
      </NavLink>
    </nav>
  );
}
