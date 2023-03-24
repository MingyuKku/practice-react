import { SET_TRANSITION_CLASS, SET_LOCATION } from "./types";

const initState = {
  transitionClass: 'fadeIn',
  locate: null,
}

const transitionReducer = (state=initState, action) => {
  switch (action.type) {
    case SET_TRANSITION_CLASS:
      if (action.transitionClass === 'fadeIn') {
        return {
          ...state,
          transitionClass: action.transitionClass,
          locate: action.locate
        }
      } else {
        return {
          ...state,
          transitionClass: action.transitionClass,
        }
      }
    case SET_LOCATION:
      return {
        ...state,
        locate: action.locate
      }
    default:
      return state;
  }
}

export default transitionReducer;