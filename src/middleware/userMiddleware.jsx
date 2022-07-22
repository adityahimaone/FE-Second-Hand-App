import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "store/action/loginAction";

function UserMiddleware(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data: loginData } = useSelector((state) => state.login);
  const token = loginData?.data?.token;

  const handleMiddleware = () => {
    if (token === null) {
      return navigate("/");
    }

    if (token !== null) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        dispatch(authLogout());
        return navigate("/");
      }
    }
    return null;
  };

  useEffect(() => {
    handleMiddleware();
  }, [token]);

  return props.children;
}

export default UserMiddleware;
