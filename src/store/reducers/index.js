import { combineReduces } from "react-redux";
import app from "./appReducers";

export default function rootReducer() {
  return combineReduces({
    app
  });
}
