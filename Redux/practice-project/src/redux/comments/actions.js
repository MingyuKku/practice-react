import { FETCH_COMMENTS, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUSET, FETCH_COMMENTS_SUCCESS } from "./type";

const fetchCommentSucces = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments
  }
}

const fetchCommentFailure = (err) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: err
  }
}

const fetchCommentRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUSET
  }
}



const fetchComments = () => { // thunk함수(객체를 반환하지 않고 함수를 반환함)
  return (dispatch) => {
    dispatch(fetchCommentRequest());
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => dispatch(fetchCommentSucces(data)))
    .catch(err => dispatch(fetchCommentFailure(err)))
  }
}

export {
  fetchComments,
}