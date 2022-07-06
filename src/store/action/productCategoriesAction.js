import { AxiosCustom } from "src/utils/axiosCustom";
import { GET_PRODUCT_BY_ALL_CATEGORY } from "../types";

export const getAllProductByCategories = () => {
  return (dispatch) => {
    dispatch({ type: `${GET_PRODUCT_BY_ALL_CATEGORY}_LOADING` });
    AxiosCustom.get(`/category/all-category`)
      .then((response) => {
        dispatch({
          type: `${GET_PRODUCT_BY_ALL_CATEGORY}_FULFILLED`,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${GET_PRODUCT_BY_ALL_CATEGORY}_ERROR`,
          error: error.message,
        });
      });
  };
};
