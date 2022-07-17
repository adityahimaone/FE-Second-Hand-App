/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { POST_PRODUCT_SELLER } from "../types";

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
          setSuccessHandler(true)
        }
      })
      .catch((error) => {
        dispatch({
          type: `${POST_PRODUCT_SELLER}_ERROR`,
          error: error.response,
        });
        if (error.response.status === 400) {
          setErrorHandler(true)
        }
      });
  };
