import React, { useState, useEffect } from "react";
import Header from "../common/Header";
// import axios from "axios";
import * as api from "../../api";

const NowPlaying = () => {
  const [responseData, setResponseData] = useState("");

  // useEffect(() => {
  //   axios({
  //     method: "GET",
  //     url: "https://movies-tvshows-data-imdb.p.rapidapi.com/",
  //     headers: {
  //       "content-type": "application/octet-stream",
  //       "x-rapidapi-host": "movies-tvshows-data-imdb.p.rapidapi.com",
  //       "x-rapidapi-key": "17a1481d36msh914f7f71fa8c9bap17c382jsn359ae930f36c",
  //       useQueryString: true,
  //     },
  //     params: {
  //       page: "1",
  //       type: "get-airingtoday-shows",
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response);

  //       console.log(response.data.tv_results[0].title);
  //       setResponseData(response.data.tv_results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    api
      .getTodayShows()
      .then((shows) => {
        console.log(shows);
        setResponseData(shows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <p>This is NowPlaying</p>
      {responseData &&
        responseData.map((show) => <li key={show.title}>{show.title}</li>)}
    </>
  );
};

export default NowPlaying;
