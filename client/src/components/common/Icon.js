import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  iconsContainer: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    padding: "10px 30px",
    backgroundColor: "#5E5C5C",
    marginBottom: "10px",
  },

  providerIcon: {
    objectFit: "contain",
    borderRadius: "20%",
    objectFit: "contain",
    maxHeight: "60px",
    marginRight: "10px",
    "&-webkit-scrollbar": {
      display: "none",
    },
  },
}));

function Icon({ src, alt }) {
  const classes = useStyles();
  return (
    <>
      <img className={classes.providerIcon} src={src} alt={alt} />
    </>
  );
}

export default Icon;
