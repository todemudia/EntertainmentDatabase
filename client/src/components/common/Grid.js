import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const base_url = 'https://image.tmdb.org/t/p/original/';

const useStyles = makeStyles((theme) => ({
  row: {
    marginLeft: '20px',
    color: '#fff',
  },
  rowPosters: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '20px',
  },
  rowPoster: {
    objectFit: 'contain',
    /* width: 100%; */
    maxHeight: '350px',
    marginRight: '20px',
    marginBottom: '20px',
    transition: 'transform 450ms',
    '&:hover': {
      transform: 'scale(1.09)',
      opacity: '1',
    },
  },
}));

const Grid = () => {
  const classes = useStyles();
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(location.state.movies);
  }, [location]);

  return (
    <div className={classes.row}>
      <div className={classes.rowPosters}>
        {movies ? (
          movies.map((movie) => (
            <Link to={{ pathname: '/movie', key: movie.id, state: movie }}>
              {movie.poster_path ? (
                <img
                  key={movie.id}
                  className={classes.rowPoster}
                  src={`${base_url}${movie.poster_path}`}
                  alt={movie.name}
                />
              ) : (
                ''
              )}
            </Link>
          ))
        ) : (
          <div>No Movies Found</div>
        )}
      </div>
    </div>
  );
};

export default Grid;
