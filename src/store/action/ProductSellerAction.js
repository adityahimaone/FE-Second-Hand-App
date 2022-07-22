/* eslint-disable import/prefer-default-export */
import { AxiosWithAuth } from "utils/axiosWithAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  POST_PRODUCT_SELLER,
  GET_MY_PRODUCT,
  GET_PRODUCT_SOLD,
  DELETE_PRODUCT_SELLER,
  PUT_EDIT_PRODUCT,
} from "../types";

export const postAddProductSeller = (token, data, setSuccess, setErrorhandler) => (dispatch) => {
  dispatch({ type: `${POST_PRODUCT_SELLER}_LOADING` });
  AxiosWithAuth(token)
    .post("/product/add-product", data)
    .then((response) => {
      dispatch({
        type: `${POST_PRODUCT_SELLER}_FULFILLED`,
        payload: response.status,
      });
      if (response.status === 201) {
        setSuccess(true)
      }
    })
    .catch((error) => {
      dispatch({
        type: `${POST_PRODUCT_SELLER}_ERROR`,
        error: error.response,
      });
      if (error.response.status === 400) {
        setErrorhandler(true)
      }
    });
};

export const getMyProduct = (token) => (dispatch) => {
  dispatch({ type: `${GET_MY_PRODUCT}_LOADING` });
  AxiosWithAuth(token)
    .get("/product/my-product")
    .then((response) => {
      dispatch({
        type: `${GET_MY_PRODUCT}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_MY_PRODUCT}_ERROR`,
        error: error.response,
      });
    });
};

export const getProductSold = (token) => (dispatch) => {
  dispatch({ type: `${GET_PRODUCT_SOLD}_LOADING` });
  AxiosWithAuth(token)
    .get("/product/product-sold")
    .then((response) => {
      dispatch({
        type: `${GET_PRODUCT_SOLD}_FULFILLED`,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: `${GET_PRODUCT_SOLD}_ERROR`,
        error: error.response,
      });
    });
};

export const deleteProductSeller = (token, id, Success) => (dispatch) => {
  dispatch({ type: `${DELETE_PRODUCT_SELLER}_LOADING` });
  AxiosWithAuth(token)
    .delete(`/product/delete-product/${id}`)
    .then((response) => {
      dispatch({
        type: `${DELETE_PRODUCT_SELLER}_FULFILLED`,
        payload: response.data,
      });
      if (response.status === 200) {
        Success(true);
      }
    })
    .catch((error) => {
      dispatch({
        type: `${DELETE_PRODUCT_SELLER}_ERROR`,
        error: error.message,
      });
    });
};

export const editProductSeller = (token, data, id, setSuccess) => (dispatch) => {
  dispatch({ type: `${PUT_EDIT_PRODUCT}_LOADING` });
  AxiosWithAuth(token)
    .put(`/product/update-product/${id}`, {
      nama: data.nama,
      harga: data.harga,
      deskripsi: data.deskripsi,
      category_id: parseInt(data.category_id, 10),
    })
    .then((response) => {
      dispatch({
        type: `${PUT_EDIT_PRODUCT}_FULFILLED`,
        payload: response.status,
      });
      if (response.status === 200) {
        setSuccess(true)
      }
    })
    .catch((error) => {
      dispatch({
        type: `${PUT_EDIT_PRODUCT}_ERROR`,
        error: error.response,
      });
    });
};
