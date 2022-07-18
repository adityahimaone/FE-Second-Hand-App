import { POST_UPDATE_PROFILE } from "../types";

const initialState = {
    data: {
      status: false,
      message: "",
      data: {},
    },
    isLoading: true,
    error: null,
  };

const profilePostReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${POST_UPDATE_PROFILE}_LOADING`:
      return {
        ...state,
      };

    case `${POST_UPDATE_PROFILE}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${POST_UPDATE_PROFILE}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default profilePostReducer;
