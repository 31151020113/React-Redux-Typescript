import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./redux/index";

const store = createStore(reducers, applyMiddleware(thunk));
export type RootState = ReturnType<typeof reducers>;

export default store;
