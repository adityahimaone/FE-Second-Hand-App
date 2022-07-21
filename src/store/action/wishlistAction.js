import { AxiosWithAuth } from "utils/axiosWithAuth";
import { GET_WISHLIST, POST_WISHLIST, DELETE_WISHLIST } from "../types";

export const getWishlist = (token) => (dispatch) => {
  dispatch({ type: `${GET_WISHLIST}_LOADING` });
  AxiosWithAuth(token)
    .get("/wishlist/all-wishlist")
    .then((response) => {
      dispatch({
        type: `${GET_WISHLIST}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_WISHLIST}_ERROR`,
        error: error.message,
      });
    });
};

export const addWishlist = (token, id) => (dispatch) => {
  dispatch({ type: `${POST_WISHLIST}_LOADING` });
  AxiosWithAuth(token)
    .post("/wishlist/add-wishlist", {
      product_id: parseInt(id, 10),
    })
    .then((response) => {
      dispatch({
        type: `${POST_WISHLIST}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${POST_WISHLIST}_ERROR`,
        error: error.message,
      });
    });
};

export const deleteWishlist = (token, id) => (dispatch) => {
  dispatch({ type: `${DELETE_WISHLIST}_LOADING` });
  AxiosWithAuth(token)
    .delete(`/wishlist/delete-wishlist/${id}`)
    .then((response) => {
      dispatch({
        type: `${DELETE_WISHLIST}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${DELETE_WISHLIST}_ERROR`,
        error: error.message,
      });
    });
};
