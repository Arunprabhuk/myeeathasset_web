import { combineReducers } from "redux";
import { userDetailsReducer } from "./reducer/userReducer";

export const rootReducer = combineReducers({
  user: userDetailsReducer,
});
