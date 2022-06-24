import axios from "axios";
import { POST_REGISTER } from "../types";


export const postRegister= ()=> {
    console.log("2. masuk action");
    return (dispatch) => {

        dispatch({ type: `${POST_REGISTER}_LOADING` });

        //get API
        axios({
            method: 'POST',
            url: 'https://old-but-new.herokuapp.com/api/v1/auth/register',
        })
        .then((response) => {
            console.log("3. berhasil dapat data : ", response.data);
            dispatch({
                type: `${POST_REGISTER}_FULFILLED`,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log("3. gagal dapat data : ", error);
            dispatch({
                type: `${POST_REGISTER}_ERROR`,
                error: error.message,
            });
        });
    };
};