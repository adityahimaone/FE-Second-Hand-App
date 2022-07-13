import { AxiosCustom } from "utils/axiosCustom";
import { POST_LOGIN } from "../types";

export const authLogin = (payload) => (dispatch) => {
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

export const authLogout = () => (dispatch) => {
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
