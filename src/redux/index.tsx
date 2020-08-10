import { combineReducers } from "redux";
import home from "./home/index";
import { HomeState } from "./home/reducers";

export interface AppState {
  home: HomeState;
}

const reducers = combineReducers({
  home: home,
});

export default reducers;
