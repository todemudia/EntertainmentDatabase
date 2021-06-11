import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainFooter: {
    color: 'white',
    backgroundColor: '#000',
    paddingTop: '0.5em',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  list: {
    listStyle: 'none',
    color: 'grey',
  },
  rights: {
    margin: 'auto',
    width: '50%',
    padding: '10px',
    textAlign: 'center',
    borderTop: '1px, solid white',
  },
  box: {
    margin: '20px',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainFooter}>
      <div className={classes.rowContainer}>
        <div className={classes.box}>
          <Typography variant="h6">Made By Todemudia</Typography>
          <ul className={classes.list}>
            <li>+44123456789</li>
            <li>Liverpool, United KIngdom</li>
            <li>123 North Street</li>
          </ul>
        </div>
        <div className={classes.box}>
          <Typography variant="h6">STUFF</Typography>
          <ul className={classes.list}>
            <li>DANK MEMES</li>
            <li>OTHER STUFF</li>
            <li>GUD STUFF</li>
          </ul>
        </div>
        <div className={classes.box}>
          <Typography variant="h6">ANOTHER COLUMN</Typography>
          <ul className={classes.list}>
            <li>DANK MEMES</li>
            <li>OTHER STUFF</li>
            <li>GUD STUFF</li>
          </ul>
        </div>
        <div className={classes.box}>
          <Typography variant="h6">AND ANOTHER</Typography>
          <ul className={classes.list}>
            <li>DANK MEMES</li>
            <li>OTHER STUFF</li>
            <li>GUD STUFF</li>
          </ul>
        </div>
      </div>
      <div className={classes.rights}>
        <Typography variant="body1" className={classes}>
          &copy;{new Date().getFullYear()} Triumph Odemudia | All rights
          reserved | Terms of Service | Privacy
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
