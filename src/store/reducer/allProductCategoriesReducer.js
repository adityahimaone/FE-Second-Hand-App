import { GET_PRODUCT_BY_ALL_CATEGORY } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: [],
  },
  isLoading: true,
  error: null,
};

const allProductCategoriesReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_PRODUCT_BY_ALL_CATEGORY}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${GET_PRODUCT_BY_ALL_CATEGORY}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    case `${GET_PRODUCT_BY_ALL_CATEGORY}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
    default:
      return state;
  }
};

export default allProductCategoriesReducer;
