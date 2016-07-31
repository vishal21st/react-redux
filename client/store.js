import { applyMiddleware, createStore} from "redux"
import thunk from "redux-thunk"
import AppReducers from "./reducers"

const middleware = applyMiddleware(thunk);

export default createStore(AppReducers, middleware)