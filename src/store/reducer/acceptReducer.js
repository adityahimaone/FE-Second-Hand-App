import { PUT_PRODUCT_ACCEPT_NEGOTATION } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: {},
  },
  isLoading: true,
  error: null,
};

const acceptReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${PUT_PRODUCT_ACCEPT_NEGOTATION}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${PUT_PRODUCT_ACCEPT_NEGOTATION}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${PUT_PRODUCT_ACCEPT_NEGOTATION}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };

    default:
      return state;
  }
};

export default acceptReducer;
