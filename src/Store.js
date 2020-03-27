import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";

import RootReducer from "./reducers";

const Store = createStore(RootReducer, applyMiddleware(promise, thunk));

export default Store;
