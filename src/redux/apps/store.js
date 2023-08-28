import { createStore } from "redux";
import rootReducer from "../reducers";
import { applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store;
