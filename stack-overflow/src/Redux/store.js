import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./reducer/loginReducer";


const rootReducer = ({
  loginReducer
})


export const store = legacy_createStore(combineReducers(rootReducer),applyMiddleware(thunk))