import { IconButton } from "@material-ui/core";
import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";

const MoviePage = () => {
  const { state } = useLocation();
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <>
      <img src={`${base_url}${state.poster_path}`} alt={state.name} />
      <h1>{state.name}</h1>
      <p>{state.overview}</p>
      <IconButton>
        <FavoriteIcon />
      </IconButton>
    </>
  );
};

export default MoviePage;
