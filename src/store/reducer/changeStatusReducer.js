import { CHANGE_STATUS_PRODUCT } from "store/types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: {},
  },
  isLoading: true,
  error: null,
};

const changeStatusReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${CHANGE_STATUS_PRODUCT}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${CHANGE_STATUS_PRODUCT}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${CHANGE_STATUS_PRODUCT}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};

export default changeStatusReducer;
