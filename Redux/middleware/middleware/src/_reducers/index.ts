import { combineReducers } from 'redux';
import reducer__01 from './__01__reducer';


const rootReducer = combineReducers({
    reducer__01,
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;