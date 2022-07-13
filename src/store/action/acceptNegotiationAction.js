/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { PUT_PRODUCT_ACCEPT_NEGOTATION } from "../types";

export const putProductAcceptNegotiation = (token, id) => (dispatch) => {
  dispatch({ type: `${PUT_PRODUCT_ACCEPT_NEGOTATION}_LOADING` });
  AxiosWithAuth(token)
    .put(`/nego/update-nego/${id}`, {
      is_accept: true,
    })
    .then((response) => {
      dispatch({
        type: `${PUT_PRODUCT_ACCEPT_NEGOTATION}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${PUT_PRODUCT_ACCEPT_NEGOTATION}_ERROR`,
        error: error.message,
      });
    });
};
