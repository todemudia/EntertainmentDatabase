import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navSearch: {
    display: "flex",
    flex: "0.5",
    alignItems: "center",
    borderRadius: "24px",
  },
  navSearchInput: {
    height: "12px",
    padding: "10px",
    border: "none",
    width: "100%",
  },
  navSearchIcon: {
    padding: "5px",
    height: "22px",
    backgroundColor: "#d8412d",
    cursor: "pointer",
  },
  searchButton: {
    margin: "0px",
  },
}));

function Search() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.navSearch}>
        <input
          type="text"
          placeholder="Search..."
          className={classes.navSearchInput}
        />
        <SearchIcon className={classes.navSearchIcon} />
      </div>
    </>
  );
}

export default Search;
