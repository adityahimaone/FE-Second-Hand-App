/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { authLogout } from "store/action/loginAction";

import { getAllNotification } from "store/action/notificationAction";
import { ConvertToDate, ConvertToIDR } from "utils/helper";
import Style from "./Navbar.module.css";
import NotificationDropdown from "./Notification/NotificationDropdown";

const initialStateNotif = [
  {
    id: 0,
    negotation_id: 0,
    product_id: 0,
  },
];

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoading: isLoadingLogin, data: loginData } = useSelector(
    (state) => state.login
  );
  const { isLoading: isLoadingNotif, data: notificationData } = useSelector(
    (state) => state.notification
  );

  const [loginState, setLoginState] = useState(false);
  const [token, setToken] = useState(loginData?.data?.token);
  const [notifSeller, setNotifSeller] = useState(initialStateNotif);
  const [notifBuyer, setnotifBuyer] = useState(initialStateNotif);

  const handleLogout = () => {
    dispatch(authLogout());
    setLoginState(false);
  };

  console.log(location.pathname);

  console.log(notificationData, notifSeller, "notificationData");

  useEffect(() => {
    if (loginData.data) {
      if (loginData?.data?.id !== 0 && loginData?.data?.token !== null) {
        setLoginState(true);
      }
    }
    dispatch(getAllNotification(token));
    setNotifSeller(notificationData?.data?.notif_seller);
    setnotifBuyer(notificationData?.data?.notif_buyer);
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
              <div className="col-2" />
            </>
          )}
          {pathnameUserProfile && (
            <>
              <div className="col-8 text-center">
                <span className="fs-6">Lengkapi Info Akun</span>
              </div>
              <div className="col-2" />
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
                  <i className="bi bi-box-arrow-in-right" />
                  <span className="px-2">Masuk</span>
                </Button>
              </Link>
            )}
            {userNav && (
              <div className="d-flex">
                <Link to="/product/list" className="btn">
                  <i className="bi bi-list-ul fs-5" />
                </Link>
                {/* <Link to="/notification" className="btn">
                  <i className="bi bi-bell fs-5"></i>
                </Link> */}
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-basic"
                    align="end"
                    variant="none"
                  >
                    <i className="bi bi-bell fs-5" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    className=""
                    style={{
                      width: "376px",
                    }}
                  >
                    <NotificationDropdown
                      notifSeller={notifSeller}
                      notifBuyer={notifBuyer}
                    />
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" variant="none">
                    <i className="bi bi-person fs-5" />
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
