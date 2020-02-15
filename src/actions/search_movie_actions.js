import { SEARCH_ERROR, SEARCH_INIT, SEARCH_SUCCESS } from '../constants';

export const initSearch = (searchValue) => {
  return {
    type: SEARCH_INIT,
    payload: searchValue
  }
};

export const searchSuccess = (response) => {
  return {
    type: SEARCH_SUCCESS,
    payload: response
  }
};

export const searchError = (error) => {
  return {
    type: SEARCH_ERROR,
    payload: error
  }
};
