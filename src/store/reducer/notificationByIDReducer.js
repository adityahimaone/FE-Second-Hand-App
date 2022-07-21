import { GET_DETAIL_NOTIFICATION } from "../types";

const initialState = {
  data: {
    status: false,
    message: "",
    data: {},
  },
  isLoading: true,
  error: null,
};

const notificationByIDReducer = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case `${GET_DETAIL_NOTIFICATION}_LOADING`:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case `${GET_DETAIL_NOTIFICATION}_FULFILLED`:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case `${GET_DETAIL_NOTIFICATION}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error,
      };

    default:
      return state;
  }
};

export default notificationByIDReducer;
