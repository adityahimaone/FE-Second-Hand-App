import { POST_PRODUCT_OFFERING } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: {},
  },
  isLoading: true,
  error: null,
};

const offeringReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${POST_PRODUCT_OFFERING}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${POST_PRODUCT_OFFERING}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${POST_PRODUCT_OFFERING}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    default:
      return state;
  }
};

export default offeringReducer;
