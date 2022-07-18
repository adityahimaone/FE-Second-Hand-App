import { GET_MY_PRODUCT } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: [],
  },
  isLoading: true,
  error: null,
};

const sellerMyProductReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_MY_PRODUCT}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${GET_MY_PRODUCT}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_MY_PRODUCT}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};

export default sellerMyProductReducer;
