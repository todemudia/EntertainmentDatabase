import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, InputBase, Paper } from '@material-ui/core';
import axios from '../../api';
import requests from '../../requests';
const base_url = 'https://image.tmdb.org/t/p/original/';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 500,
    height: '55%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const Search = () => {
  const classes = useStyles();
  const history = useHistory();
  const [query, setQuery] = useState();

  const searchMovie = async () => {
    const request = await axios.get(requests.fetchSearchRequest + query);
    history.push({
      pathname: '/grid',
      state: { movies: request.data.results },
    });
  };

  return (
    <>
      <Paper onSubmit={searchMovie} component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search"
          type="string"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={searchMovie}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
};

export default Search;
