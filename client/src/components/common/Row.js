import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "../../api";

const base_url = "https://image.tmdb.org/t/p/original/";

const useStyles = makeStyles((theme) => ({
  row: {
    marginLeft: "20px",
    color: "#fff",
  },
  rowPosters: {
    display: "flex",
    overflowY: "hidden",
    overflowX: "scroll",
    padding: "20px",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  rowPoster: {
    objectFit: "contain",
    /* width: 100%; */
    maxHeight: "250px",
    marginRight: "10px",
    transition: "transform 450ms",
    "&:hover": {
      transform: "scale(1.09)",
      opacity: "1",
    },
  },
}));

function Row({ title, fetchUrl }) {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className={classes.row}>
      <h2>{title}</h2>
      <div className={classes.rowPosters}>
        {movies.map((movie) => (
          <Link to={{ pathname: "/movie", key: movie.id, state: movie }}>
            <img
              key={movie.id}
              className={classes.rowPoster}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;
