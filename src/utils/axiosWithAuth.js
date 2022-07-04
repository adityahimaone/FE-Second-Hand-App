import axios from "axios";

const mainAPI = process.env.REACT_APP_API_URL;

export const AxiosWithAuth = (token) => {
  return axios.create({
    baseURL: mainAPI,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      "Accest-Control-Allow-Credentials": true,
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Headers":
        "append,delete,entries,foreach,get,has,keys,set,values,Authorization,Content-Type",
    },
  });
};
