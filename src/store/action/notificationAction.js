import { AxiosWithAuth } from "utils/axiosWithAuth";
import { GET_NOTIFICATION, GET_DETAIL_NOTIFICATION } from "../types";

export const getAllNotification = (token) => (dispatch) => {
  dispatch({ type: `${GET_NOTIFICATION}_LOADING` });
  AxiosWithAuth(token)
    .get("/notification/get-notif")
    .then((response) => {
      dispatch({
        type: `${GET_NOTIFICATION}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_NOTIFICATION}_ERROR`,
        error: error.message,
      });
    });
};

export const getDetailNotification = (token, id) => (dispatch) => {
  dispatch({ type: `${GET_DETAIL_NOTIFICATION}_LOADING` });
  AxiosWithAuth(token)
    .get(`/notification/get-detail-notif/${id}`)
    .then((response) => {
      dispatch({
        type: `${GET_DETAIL_NOTIFICATION}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_DETAIL_NOTIFICATION}_ERROR`,
        error: error.message,
      });
    });
};
