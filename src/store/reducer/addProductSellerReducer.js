import { POST_PRODUCT_SELLER } from "../types";

const initialState = {
    data: {
      status: false,
      message: "",
      data: {},
    },
    isLoading: true,
    error: null,
  };

const addProductSeller = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${POST_PRODUCT_SELLER}_LOADING`:
      return {
        ...state,
      };

    case `${POST_PRODUCT_SELLER}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${POST_PRODUCT_SELLER}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default addProductSeller;
