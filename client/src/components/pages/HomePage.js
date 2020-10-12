import React from "react";
import Banner from "../common/Banner";
import Row from "../common/Row";
import requests from "../../requests";

const Home = () => {
  return (
    <>
      <Banner />
      <Row title="Trending: TV" fetchUrl={requests.fetchTrendingTVShows} />
      <Row title="Trending: Movies" fetchUrl={requests.fetchTrendingMovies} />
      <Row title="Top Rated: Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Top Rated: TV" fetchUrl={requests.fetchTopRatedTV} />
    </>
  );
};

export default Home;
