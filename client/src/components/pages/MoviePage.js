import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 500,
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const MoviePage = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`${base_url}${state.poster_path}`}
            title={state.name}
          />
        </CardActionArea>
      </Card>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<FavoriteIcon />}
      >
        Favourite
      </Button>
      <Typography>{state.name || state.title}</Typography>
      <Typography>{state.overview}</Typography>
    </>
  );
};

export default MoviePage;
