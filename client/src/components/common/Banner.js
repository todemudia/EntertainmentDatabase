import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api";
import requests from "../../requests";
import "./Banner.css";

export default function Header(props) {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMedia(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${media?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <Link
          style={{ textDecoration: "none" }}
          to={
            media?.media_type === "movie" || "tv"
              ? `/${media?.media_type}`
              : `/movie`
          }
        >
          <h1 className="banner__title">
            {media?.title || media?.name || media?.original_name}
          </h1>
        </Link>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">Favourite</button>
        </div>
        <h1 className="banner__description">
          {truncate(media?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}
