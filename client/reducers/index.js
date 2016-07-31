import { combineReducers } from 'redux';
import thunk from "redux-thunk";
import portfoliosReducer from "./portfolios";

const AppReducers = combineReducers({
  portfolios: portfoliosReducer
});

export default AppReducers;
