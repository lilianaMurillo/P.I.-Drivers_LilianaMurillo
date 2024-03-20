import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; //esta linea es para que funcione la extension del navegador REDUX DEVTOOLS.

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
