/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { POST_PRODUCT_SELLER } from "../types";

export const postProductOffer = (token, data) => (dispatch) => {
  dispatch({ type: `${POST_PRODUCT_SELLER}_LOADING` });
  AxiosWithAuth(token)
    .post("/product/add-product", data)
    .then((response) => {
      dispatch({
        type: `${POST_PRODUCT_SELLER}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${POST_PRODUCT_SELLER}_ERROR`,
        error: error.message,
      });
    });
};
