import axios from "axios";
import requests from "../../requests";
import { returnErrors } from "./errorActions";
import { GET_MOVIES, GET_MOVIES_ERROR, MOVIES_LOADED } from "./types";

// check token and load user

export const getMovies = (fetchUrl) => (dispatch) => {
  // User loading
  dispatch({ type: GET_MOVIES });

  axios
    .get(`${fetchUrl}`)
    .then((res) =>
      dispatch({
        
        type: MOVIES_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: GET_MOVIES_ERROR,
      });
    });
};
