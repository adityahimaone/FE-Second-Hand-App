import { GET_WISHLIST, DELETE_WISHLIST, POST_WISHLIST } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: [],
  },
  isLoading: true,
  error: null,
};

const wishlistReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_WISHLIST}_LOADING`:
      return {
        ...state,
      };
    case `${GET_WISHLIST}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_WISHLIST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };
    case `${DELETE_WISHLIST}_LOADING`:
      return {
        ...state,
      };
    case `${DELETE_WISHLIST}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${DELETE_WISHLIST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };
    case `${POST_WISHLIST}_LOADING`:
      return {
        ...state,
      };
    case `${POST_WISHLIST}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${POST_WISHLIST}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default wishlistReducer;
