import { combineReducers } from "redux";
import home from "./home/index";
import product from "./product/index";

const reducers = combineReducers({
  home: home,
  product: product,
});

export default reducers;
