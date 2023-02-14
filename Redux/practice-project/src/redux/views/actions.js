import { ADD_VIEW } from './type';

const addView = (number) => ({
  type: ADD_VIEW, 
  payload: Number(number)
});

export {
  addView,
}