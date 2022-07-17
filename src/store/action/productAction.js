import { AxiosCustom } from "utils/axiosCustom";
import { GET_ALL_PRODUCT, GET_PRODUCT_BY_ID, GET_MY_PRODUCT } from "../types";

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

export const getMyProduct = () => (dispatch) => {
  dispatch({ type: `${GET_MY_PRODUCT}_LOADING` });
  AxiosCustom.get("/product/my-product")
    .then((response) => {
      dispatch({
        type: `${GET_MY_PRODUCT}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_MY_PRODUCT}_ERROR`,
        error: error.message,
      });
    });
};
