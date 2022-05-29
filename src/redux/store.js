import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const composedEnhancers = compose(applyMiddleware(thunk));

export const store = createStore(rootReducer, undefined, composedEnhancers);
