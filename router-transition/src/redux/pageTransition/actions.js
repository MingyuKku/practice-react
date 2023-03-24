import { SET_TRANSITION_CLASS, SET_LOCATION } from "./types";

export const set_transition_class = (transitionClass, locate) => {
  return {
    type: SET_TRANSITION_CLASS,
    transitionClass,
    locate
  }
}

export const set_location = (locate) => {
  return {
    type: SET_LOCATION,
    locate
  }
}