import { ADD_VIEW } from './type';

const initState = {
  count: 0,
}

const viewReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + action.payload
      }
    
    default: return state;
  }
}

export default viewReducer;