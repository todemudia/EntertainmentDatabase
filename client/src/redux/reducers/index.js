import { combineReducers } from "redux";
import favouriteReducer from "./favouriteReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import mediaReducer from "./mediaReducer";

const rootReducers = combineReducers({
  favourite: favouriteReducer,
  error: errorReducer,
  auth: authReducer,
  media: mediaReducer,
});

export default rootReducers;
