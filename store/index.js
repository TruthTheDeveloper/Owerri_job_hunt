import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers";
import { composeWithDevTools } from 'redux-devtools-extension';





const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;