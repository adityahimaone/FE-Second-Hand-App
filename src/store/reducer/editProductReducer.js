import { PUT_EDIT_PRODUCT } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: {},
  },
  isLoading: true,
  error: null,
};

const editProductReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${PUT_EDIT_PRODUCT}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${PUT_EDIT_PRODUCT}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${PUT_EDIT_PRODUCT}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};

export default editProductReducer;
