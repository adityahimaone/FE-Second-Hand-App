import { GET_PRODUCT } from "../types";
import { AxiosCustom } from "src/utils/axiosCustom";

export const GET_PRODUCT = "GET_PRODUCT";

export const buyerProductAction = (payload) => {
    return (dispatch) => {
        dispatch({ type: `${GET_PRODUCT}_LOADING` });
        AxiosCustom.get(`product`, payload)
        .then((response) => {
            dispatch({
                type: `${GET_PRODUCT}_FULFILLED`,
                payload: response.data,
            });
        })
        .catch((error) => {
            dispatch({
                type: `${GET_PRODUCT}_ERROR`,
                error: error.message,
            });
        });
    };
};
