import { GET_PRODUCT_SOLD } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: [],
  },
  isLoading: true,
  error: null,
};

const productSoldReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_PRODUCT_SOLD}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${GET_PRODUCT_SOLD}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_PRODUCT_SOLD}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};

export default productSoldReducer;
