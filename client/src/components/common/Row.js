import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
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
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <Link
            to={{ pathname: "/movie", key: movie.id, state: movie }}
            // to={movie.media_type ? `/${movie.media_type}` : `/movie`}
            // state={movie.id}
          >
            <img
              key={movie.id}
              className="row__poster"
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
