import axios from "axios";
import { POST_LOGIN } from "../types";

export const postLogin= ()=> {
    console.log("masuk action");
    return (dispatch) => {
        dispatch({ type: `${POST_LOGIN}_LOADING` });

        //get API
        axios({
            method: 'POST',
            url: 'https://old-but-new.herokuapp.com/api/v1/auth/login',
        })
        .then((response) => {
            console.log("berhasil dapat data : ", response.data);
            dispatch({
                type: `${POST_LOGIN}_FULFILLED`,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log("gagal dapat data : ", error);
            dispatch({
                type: `${POST_LOGIN}_ERROR`,
                error: error.message,
            });
        });
    };
};