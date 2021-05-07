import {
  GET_MEDIA,
  GET_MEDIA_ERROR,
  GET_MEDIA_SUCCESS,
} from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MEDIA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
