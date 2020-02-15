import {
  SEARCH_ERROR,
  SEARCH_INIT,
  INIT_SEARCH_SUCCESS,
  UPDATE_SEARCH_VALUE,
  LOAD_NEXT_PAGE,
  LOAD_NEXT_PAGE_SUCCESS,
  LOAD_NEXT_PAGE_ERROR
} from '../constants';

export const initSearch = () => {
  return {
    type: SEARCH_INIT
  }
};

export const initSearchSuccess = (response) => {
  return {
    type: INIT_SEARCH_SUCCESS,
    payload: response
  }
};

export const loadNextPage = () => {
  return {
    type: LOAD_NEXT_PAGE
  }
};

export const loadNextPageSuccess = (response) => {
  return {
    type: LOAD_NEXT_PAGE_SUCCESS,
    payload: response
  }
};

export const loadNextPageError = () => {
  return {
    type: LOAD_NEXT_PAGE_ERROR
  }
};

export const searchError = (error) => {
  return {
    type: SEARCH_ERROR,
    payload: error
  }
};

export const updateSearchValue = (searchValue) => {
  return {
    type:  UPDATE_SEARCH_VALUE,
    payload: searchValue
  };
};
