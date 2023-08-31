import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from "./ActionTypes";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    user: payload,
  };
};

export const setLoading = (status) => {
  return {
    type: SET_LOADING_STATUS,
    loading: status,
  };
};

export const getArticles = (payload) => {
  return {
    type: GET_ARTICLES,
    payload: payload,
  };
};
