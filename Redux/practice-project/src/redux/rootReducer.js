import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
  subscribers: subscribersReducer,
  view: viewReducer,
  comments: commentsReducer,
})

export default rootReducer;