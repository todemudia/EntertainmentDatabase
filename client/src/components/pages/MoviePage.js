import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    margin: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  root: {
    maxWidth: '350px',
    minWidth: '350px',
    margin: theme.spacing(2),
  },
  media: {
    height: '500px',
    width: '100%',
    component: 'img',
  },
  movieDetails: {
    margin: '1rem 5rem',
  },
  button: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  ratings: {
    marginRight: theme.spacing(3),
  },
  title: {
    textAlign: 'center',
    margin: '20px',
    color: 'white',
  },
  description: {
    textAlign: 'left',
    color: 'white',
    margin: '40px 20px',
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#020001',
  },
}));

const MoviePage = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const base_url = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <>
      <div className={classes.container}>
        <Card className={classes.root}>
          <CardActionArea className={classes.cardBottom}>
            <CardMedia
              className={classes.media}
              image={`${base_url}${state.poster_path}`}
              title={state.name}
            />
          </CardActionArea>
          <CardActions className={classes.cardBottom}>
            <IconButton color="secondary">
              <FavoriteIcon />
            </IconButton>
            <Rating
              className={classes.ratings}
              name="rating"
              defaultValue={state.vote_average / 2}
              precision={0.1}
              readOnly
            />
          </CardActions>
        </Card>
        <div className={classes.movieDetails}>
          <Typography variant="h3" className={classes.title}>
            {state.name || state.title}
          </Typography>
          <Typography variant="body1" className={classes.description}>
            {state.overview}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default MoviePage;
