import { SET_USER } from "./ActionTypes";

export const setUser = (payload) => {
  return {
    type: SET_USER,
    user: payload,
  };
};
