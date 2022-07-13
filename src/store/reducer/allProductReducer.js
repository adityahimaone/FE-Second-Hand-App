import { GET_ALL_PRODUCT } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: [],
  },
  isLoading: true,
  error: null,
};

const allProductReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_ALL_PRODUCT}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${GET_ALL_PRODUCT}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case `${GET_ALL_PRODUCT}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default allProductReducer;
