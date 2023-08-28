import { SET_USER } from "../actions/ActionTypes";
import { userInitialState } from "./userInitialState";

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default userReducer;
