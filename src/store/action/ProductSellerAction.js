/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { POST_PRODUCT_SELLER, GET_MY_PRODUCT } from "../types";

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
          setSuccessHandler(true);
        }
      })
      .catch((error) => {
        dispatch({
          type: `${POST_PRODUCT_SELLER}_ERROR`,
          error: error.response,
        });
        if (error.response.status === 400) {
          setErrorHandler(true);
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
