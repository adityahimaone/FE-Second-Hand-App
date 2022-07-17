/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { CHANGE_STATUS_PRODUCT } from "store/types";

export const putProductChangeStatus = (token, id, status) => (dispatch) => {
  dispatch({ type: `${CHANGE_STATUS_PRODUCT}_LOADING` });
  AxiosWithAuth(token)
    .put(`/product/update-to-sold/${id}`, {
      is_sold: status,
    })
    .then((response) => {
      dispatch({
        type: `${CHANGE_STATUS_PRODUCT}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${CHANGE_STATUS_PRODUCT}_ERROR`,
        error: error.message,
      });
    });
};
