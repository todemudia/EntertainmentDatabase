import React, { useEffect } from "react";
import Banner from "../common/Banner";
import Row from "../common/Row";
import requests from "../../requests";
import { useDispatch, useSelector } from "react-redux";
import { getMedia } from "../../redux/actions/mediaActions";

const Home = () => {
  const dispatch = useDispatch();
  const media = useSelector((state) => state.media);

  useEffect(() => {
    dispatch(getMedia());
    console.log(media);
  }, []);

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
