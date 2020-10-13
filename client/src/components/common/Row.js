import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(fetchUrl);
      setMedia(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {media.map((media) => (
          <Link
            key={media.id}
            to={media.media_type ? `/${media.media_type}` : `/movie`}
          >
            <img
              key={media.id}
              className="row__poster"
              src={`${base_url}${media.poster_path}`}
              alt={media.name}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Row;
