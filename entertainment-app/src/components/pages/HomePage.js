import React from "react";
import Nav from "../common/Nav";
import Banner from "../common/Banner";
import Row from "../common/Row";
import requests from "../../requests";

const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
    </>
  );
};

export default Home;
