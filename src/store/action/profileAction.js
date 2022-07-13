/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { GET_PROFILE } from "../types";

export const getUserProfile = (token) => (dispatch) => {
  dispatch({ type: `${GET_PROFILE}_LOADING` });
  AxiosWithAuth(token)
    .get("/profile")
    .then((response) => {
      dispatch({
        type: `${GET_PROFILE}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_PROFILE}_ERROR`,
        error: error.message,
      });
    });
};
