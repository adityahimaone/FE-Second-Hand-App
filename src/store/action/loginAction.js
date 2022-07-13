import { POST_LOGIN } from "../types";
import { AxiosCustom } from "utils/axiosCustom";

export const authLogin = (payload) => {
  return (dispatch) => {
    dispatch({ type: `${POST_LOGIN}_LOADING` });
    AxiosCustom.post(`auth/login`, payload)
      .then((response) => {
        dispatch({
          type: `${POST_LOGIN}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${POST_LOGIN}_ERROR`,
          error: error.message,
        });
      });
  };
};

export const authLogout = () => {
  return (dispatch) => {
    dispatch({
      type: `${POST_LOGIN}_FULFILLED`,
      payload: {
        data: {
          token: null,
          id: null,
        },
      },
    });
  };
};
