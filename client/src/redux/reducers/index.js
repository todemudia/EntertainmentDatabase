import { combineReducers } from "redux";
import favouriteReducer from "./favouriteReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";

const rootReducers = combineReducers({
  favourite: favouriteReducer,
  error: errorReducer,
  auth: authReducer,
});

export default rootReducers;