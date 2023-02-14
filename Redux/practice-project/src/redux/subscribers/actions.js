import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './type';

const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER
  }
};

const removeSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER
  }
};

export {
  addSubscriber,
  removeSubscriber,
}