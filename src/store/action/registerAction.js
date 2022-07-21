/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { POST_REGISTER } from "../types";

export const postRegister = () => (dispatch) => {
  dispatch({ type: `${POST_REGISTER}_LOADING` });
  axios({
    method: "POST",
    url: "https://old-but-new.herokuapp.com/api/v1/auth/register",
  })
    .then((response) => {
      dispatch({
        type: `${POST_REGISTER}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${POST_REGISTER}_ERROR`,
        error: error.message,
      });
    });
};
