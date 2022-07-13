import { GET_PROFILE } from "../types";
import { AxiosWithAuth } from "utils/axiosWithAuth";

export const getUserProfile = (token) => {
  return (dispatch) => {
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
};
