import React from "react";

import SearchIcon from "@material-ui/icons/Search";
import "./Nav.css";

function Search() {
  return (
    <>
      <div className="nav__search">
        <input
          type="text"
          placeholder="Search..."
          className="nav__searchInput"
        />
        <SearchIcon className="nav__searchIcon" />
      </div>
    </>
  );
}

export default Search;
