import { POST_PRODUCT_OFFERING_NEGOTATION } from "../types";
import { AxiosWithAuth } from "src/utils/axiosWithAuth";

export const postProductOffer = (token, data) => {
  return (dispatch) => {
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
};
