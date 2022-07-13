/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { POST_PRODUCT_OFFERING_NEGOTATION } from "../types";

export const postProductOffer = (token, data) => (dispatch) => {
  dispatch({ type: `${POST_PRODUCT_OFFERING_NEGOTATION}_LOADING` });
  AxiosWithAuth(token)
    .post("/nego/add-nego", data)
    .then((response) => {
      dispatch({
        type: `${POST_PRODUCT_OFFERING_NEGOTATION}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${POST_PRODUCT_OFFERING_NEGOTATION}_ERROR`,
        error: error.message,
      });
    });
};
