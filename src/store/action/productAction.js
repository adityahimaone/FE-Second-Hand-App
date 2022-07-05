import { AxiosCustom } from "src/utils/axiosCustom";
import { GET_ALL_PRODUCT, GET_PRODUCT_BY_ID } from "../types";

export const getAllProduct = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_ALL_PRODUCT}_LOADING` });
    AxiosCustom.get(`/product/all-product?page=1&size=12`)
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
};

export const getProductByID = (id) => {
  return (dispatch) => {
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
};
