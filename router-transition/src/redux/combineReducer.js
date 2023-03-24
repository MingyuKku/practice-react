import { combineReducers } from 'redux';
import transitionReducer from './pageTransition/reducer';

const reducer = combineReducers({
  transitionReducer,
})

export default reducer;
