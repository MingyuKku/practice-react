import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUSET, FETCH_COMMENTS_SUCCESS } from "./type";

const initState = {
  items: [],
  loading: false,
  err: null,
}

const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUSET:
      return {
        ...state,
        loading: true,
      }
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        err: action.payload,
        loading: false,
      }
    default: return state;
  }
}

export default commentsReducer;