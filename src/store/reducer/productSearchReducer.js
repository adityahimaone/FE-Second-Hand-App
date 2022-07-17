import { POST_PRODUCT_SEARCH } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: {},
  },
  isLoading: true,
  error: null,
};

const productSearchReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${POST_PRODUCT_SEARCH}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${POST_PRODUCT_SEARCH}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${POST_PRODUCT_SEARCH}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};
export default productSearchReducer;
