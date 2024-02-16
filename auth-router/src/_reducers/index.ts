import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import testReducer from "./test-reducer";

const reducer = combineReducers({
    userReducer,
    testReducer,
})

export default reducer;

export type RootState = ReturnType<typeof reducer>;