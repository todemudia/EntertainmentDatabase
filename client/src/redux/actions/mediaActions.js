import axios from "axios";
import requests from "../../requests";
import { returnErrors } from "./errorActions";
import { GET_MEDIA, GET_MEDIA_ERROR, GET_MEDIA_SUCCESS } from "./types";

// check token and load user

export const getMedia = () => async (dispatch) => {
  // User loading
  axios
    .get(`${requests.base_url}${requests.fetchTrendingTVShows}`)
    .then((res) =>
      dispatch({
        type: GET_MEDIA,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: GET_MEDIA_ERROR });
      console.log(err);
    });
};
