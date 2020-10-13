import React from "react";
import Row from "../common/Row";
import requests from "../../requests";
import Icon from "../common/Icon";
import IconBar from "../common/IconBar";

const NewPage = () => {
  return (
    <>
      <IconBar />
      <Icon
        src="https://images.justwatch.com/icon/207360008/s100"
        alt="Netflix"
      />
      <Row title="New Releases:" fetchUrl={requests.fetchTrendingTVShows} />
    </>
  );
};

export default NewPage;
