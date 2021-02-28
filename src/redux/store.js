import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
  token: '',
  data: [],
  tracks: [],
  endOfPage: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'token':
      return {
        ...state,
        token: action.fetchRes,
      };
    case 'data':
      return {
        ...state,
        data: action.fetchRes,
      };
    case 'tracks':
      return {
        ...state,
        tracks: action.fetchRes,
      };
    case 'endOfPage':
      return {
        ...state,
        endOfPage: action.fetchRes,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
