import { AxiosCustom } from "utils/axiosCustom";
import { POST_PRODUCT_SEARCH } from "store/types";

const postProductSearch = (payload) => (dispatch) => {
  dispatch({ type: `${POST_PRODUCT_SEARCH}_LOADING` });
  AxiosCustom.post(`/product/search-product?search=${payload}`)
    .then((response) => {
      dispatch({
        type: `${POST_PRODUCT_SEARCH}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${POST_PRODUCT_SEARCH}_ERROR`,
        error: error.message,
      });
    });
};

export default postProductSearch;
