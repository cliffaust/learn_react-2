import { counterReducers } from "./counter";
import { combineReducers } from "redux";

export const reducers = combineReducers({
  counter: counterReducers,
});
