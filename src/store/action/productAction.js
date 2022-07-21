import { AxiosCustom } from "utils/axiosCustom";
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { GET_ALL_PRODUCT, GET_PRODUCT_BY_ID } from "../types";

export const getAllProduct = (page, size) => (dispatch) => {
  dispatch({ type: `${GET_ALL_PRODUCT}_LOADING` });
  AxiosCustom.get(`/product/all-product?page=${page}&size=${size}`)
    .then((response) => {
      dispatch({
        type: `${GET_ALL_PRODUCT}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_ALL_PRODUCT}_ERROR`,
        error: error.message,
      });
    });
};

export const getProductByID = (id) => (dispatch) => {
  dispatch({ type: `${GET_PRODUCT_BY_ID}_LOADING` });
  AxiosCustom.get(`/product/detail-product/${id}`)
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

export const getProductByIDWithAuth = (id, token) => (dispatch) => {
  dispatch({ type: `${GET_PRODUCT_BY_ID}_LOADING` });
  AxiosWithAuth(token)
    .get(`/product/detail-product/${id}`)
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
