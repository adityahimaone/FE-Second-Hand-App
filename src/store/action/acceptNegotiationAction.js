import { PUT_PRODUCT_ACCEPT_NEGOTATION } from "../types";
import { AxiosWithAuth } from "src/utils/axiosWithAuth";

export const putProductAcceptNegotiation = (token, id) => {
  return (dispatch) => {
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
};
