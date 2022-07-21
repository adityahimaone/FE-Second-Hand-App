/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { toast } from "react-toastify";
import {
  POST_PRODUCT_SELLER,
  GET_MY_PRODUCT,
  GET_PRODUCT_SOLD,
  DELETE_PRODUCT_SELLER,
  GET_PRODUCT_BY_ID,
} from "../types";

export const postAddProductSeller =
  (token, data, setErrorHandler, setSuccessHandler) => (dispatch) => {
    dispatch({ type: `${POST_PRODUCT_SELLER}_LOADING` });
    AxiosWithAuth(token)
      .post("/product/add-product", data)
      .then((response) => {
        dispatch({
          type: `${POST_PRODUCT_SELLER}_FULFILLED`,
          payload: response.status,
        });
        if (response.status === 201) {
          toast.success("Produk berhasil diterbitkan", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: `${POST_PRODUCT_SELLER}_ERROR`,
          error: error.response,
        });
        if (error.response.status === 400) {
          toast.error("Produkmu sudah ada 4", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

export const getMyProduct = (token) => (dispatch) => {
  dispatch({ type: `${GET_MY_PRODUCT}_LOADING` });
  AxiosWithAuth(token)
    .get("/product/my-product")
    .then((response) => {
      dispatch({
        type: `${GET_MY_PRODUCT}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_MY_PRODUCT}_ERROR`,
        error: error.response,
      });
    });
};

export const getProductByID = (token, id) => (dispatch) => {
  dispatch({ type: `${GET_PRODUCT_BY_ID}_LOADING` });
  AxiosWithAuth(token).get(`/product/detail-product/${id}`)
    .then((response) => {
      dispatch({
        type: `${GET_PRODUCT_BY_ID}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_PRODUCT_BY_ID}_ERROR`,
        error: error.message,
      });
    });
};

export const getProductSold = (token) => (dispatch) => {
  dispatch({ type: `${GET_PRODUCT_SOLD}_LOADING` });
  AxiosWithAuth(token)
    .get("/product/product-sold")
    .then((response) => {
      dispatch({
        type: `${GET_PRODUCT_SOLD}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_PRODUCT_SOLD}_ERROR`,
        error: error.response,
      });
    });
};

export const deleteProductSeller = (token, id) => (dispatch) => {
  dispatch({ type: `${DELETE_PRODUCT_SELLER}_LOADING` });
  AxiosWithAuth(token)
    .delete(`/product/delete-product/${id}`)
    .then((response) => {
      dispatch({
        type: `${DELETE_PRODUCT_SELLER}_FULFILLED`,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Produk berhasil dihapus", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: `${DELETE_PRODUCT_SELLER}_ERROR`,
        error: error.message,
      });
    });
};
