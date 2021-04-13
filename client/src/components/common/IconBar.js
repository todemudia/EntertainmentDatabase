import React from "react";
import Icon from "./Icon";
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

function IconBar() {
  const classes = useStyles();
  return (
    <div className={classes.iconsContainer}>
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/207360008/s100"
        alt="Netflix"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/694554/s100"
        alt="Now TV"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/89154446/s100"
        alt="Hayu"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/147638351/s100"
        alt="Disney Plus"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/52449539/s100"
        alt="Prime"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/190848813/s100"
        alt="Apple TV"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/3059247/s100"
        alt="4"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/120096503/s100"
        alt="Sky Go"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/694553/s100"
        alt="BBC Iplayer"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/169478387/s100"
        alt="Google Play"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/820542/s100"
        alt="Microsoft"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/694556/s100"
        alt="ITV Player"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/59562423/s100"
        alt="You Tube"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/2422254/s100"
        alt="Talk Talk"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/5149848/s100"
        alt="UKTV"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/128599720/s100"
        alt="Rakuten TV"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/68363608/s100"
        alt="Starz"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/14385750/s100"
        alt="Netflix Kids"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/146470618/s100"
        alt="My 5"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/175038692/s100"
        alt="Brit Box"
      />
      <Icon
        className={classes.providerIcon}
        src="https://images.justwatch.com/icon/201076273/s100"
        alt="Flix"
      />
    </div>
  );
}

export default IconBar;
