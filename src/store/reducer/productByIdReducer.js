import { GET_PRODUCT_BY_ID } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: {},
  },
  isLoading: true,
  error: null,
};

const productByIdReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_PRODUCT_BY_ID}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${GET_PRODUCT_BY_ID}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_PRODUCT_BY_ID}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};

export default productByIdReducer;
