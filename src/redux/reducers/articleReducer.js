import { GET_ARTICLES, SET_LOADING_STATUS } from "../actions/ActionTypes";
import { articleInitialState } from "./articleInitialState";

const articleReducer = (state = articleInitialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS: {
      return {
        ...state,
        loading: action.status,
      };
    }

    case GET_ARTICLES: {
      return {
        ...state,
        article: action.payload,
      };
    }

    default:
      return state;
  }
};
export default articleReducer;
