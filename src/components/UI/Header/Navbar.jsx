import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "src/store/action/loginAction";
import { Dropdown } from "react-bootstrap";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Style from "./Navbar.module.css";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [loginState, setLoginState] = useState(false);
  const { isLoading, data: loginData } = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(authLogout());
    setLoginState(false);
  };

  console.log(location.pathname);

  useEffect(() => {
    if (loginData.data) {
      if (loginData?.data?.id !== 0 && loginData?.data?.token !== null) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setLoginState(true);
      }
    }
  }, [loginData]);

  console.log(loginState, loginData);

  const userSearch =
    location.pathname !== "/notification" &&
    location.pathname !== "/user/profile";

  const userNav =
    loginState === true &&
    location.pathname !== "/notification" &&
    location.pathname !== "/user/profile";

  const pathnameNotification = location.pathname === "/notification";
  const pathnameUserProfile = location.pathname === "/user/profile";

  console.log(userNav, "userNav");

  return (
    <nav className={`${Style["nav-header"]}`}>
      <div className="container p-2">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-2">
            <Link className="d-flex align-content-center" to="/">
              <img className="w-50" src="/images/loak.id.png" alt="" />
            </Link>
          </div>
          {pathnameNotification && (
            <>
              <div className="col-8 text-center">
                <span className="fs-6">Notifikasi</span>
              </div>
              <div className="col-2"></div>
            </>
          )}
          {pathnameUserProfile && (
            <>
              <div className="col-8 text-center">
                <span className="fs-6">Lengkapi Info Akun</span>
              </div>
              <div className="col-2"></div>
            </>
          )}
          <div className="col-4">
            {userSearch && (
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="search"
                className="form-input-search"
                placeholder="Cari di sini ..."
              />
            )}
          </div>
          <div className="col-6 d-flex justify-content-end">
            {loginState === false && (
              <Link to="/login">
                <Button className="button-primary-1">
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span className="px-2">Masuk</span>
                </Button>
              </Link>
            )}
            {userNav && (
              <div className="d-flex">
                <Link to="/product/list" className="btn">
                  <i className="bi bi-list-ul fs-5"></i>
                </Link>
                <Link to="/notification" className="btn">
                  <i className="bi bi-bell fs-5"></i>
                </Link>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" variant="none">
                    <i className="bi bi-person fs-5"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/user/profile")}>
                      Edit Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
