/* eslint-disable import/prefer-default-export */
import { AxiosCustom } from "utils/axiosCustom";
import { GET_PRODUCT_BY_ALL_CATEGORY } from "../types";

export const getAllProductByCategories = () => (dispatch) => {
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
