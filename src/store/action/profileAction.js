/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { GET_PROFILE, POST_UPDATE_PROFILE } from "../types";

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

export const postProfileAction =
  (token, data, setSuccessHandler) => (dispatch) => {
    dispatch({ type: `${POST_UPDATE_PROFILE}_LOADING` });
    AxiosWithAuth(token)
      .post("/profile/update-profile", data)
      .then((response) => {
        dispatch({
          type: `${POST_UPDATE_PROFILE}_FULFILLED`,
          payload: response.status,
        });
        if (response.status === 200) {
          setSuccessHandler(true);
        }
      })
      .catch((error) => {
        dispatch({
          type: `${POST_UPDATE_PROFILE}_ERROR`,
          error: error.response,
        });
      });
  };