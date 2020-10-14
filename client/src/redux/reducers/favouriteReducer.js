import {
  GET_FAVOURITES,
  ADD_FAVOURITES,
  DELETE_FAVOURITES,
} from "../actions/types.js";

const initialState = {
  favourites: "The Lord of the Rings",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FAVOURITES:
      return {
        ...state,
      };
    default:
      return state;
  }
}
