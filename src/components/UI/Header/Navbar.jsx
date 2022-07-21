/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import { Dropdown, Button, Form } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useLocation, useMatch } from "react-router-dom";
import { authLogout } from "store/action/loginAction";

import { getAllNotification } from "store/action/notificationAction";
import { ConvertToDate, ConvertToIDR } from "utils/helper";
import { HiMenu, HiSearch } from "react-icons/hi";
import Style from "./Navbar.module.css";
import NotificationDropdown from "./components/NotificationDropdown";
import Sidebar from "./components/Sidebar";

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
  const [titlePage, setTitlePage] = useState("Title");
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchForm, setSearchForm] = useState("");

  const matchHome = useMatch("/");
  const matchProductBuyDetail = useMatch("/product/buy/:id");
  const matchNotification = useMatch("/notification/:id");
  const matchProductList = useMatch("/product/list");
  const matchUserProfile = useMatch("/user/profile");
  const matchNotificationAll = useMatch("/notification");

  const navbarHome = !matchHome && !matchProductBuyDetail && !matchNotification;

  const getTitlePage = () => {
    if (matchNotification) {
      setTitlePage("Info Penawar");
    }
    if (matchProductList) {
      setTitlePage("Daftar Jual Saya");
    }
    if (matchUserProfile) {
      setTitlePage("Lengkapi Info Akun");
    }
    if (matchNotificationAll) {
      setTitlePage("Notifikasi");
    }
  };

  const handleLogout = () => {
    dispatch(authLogout());
    setLoginState(false);
  };

  const handleSidebarClose = () => setShowSidebar(false);
  const handleSidebarShow = () => setShowSidebar(true);

  const handleChangeSearch = (e) => {
    setSearchForm(e.target.value);
  };

  console.log(
    matchHome,
    matchProductBuyDetail,
    matchNotification,
    "location.pathname"
  );

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

  useEffect(() => {
    getTitlePage();
  }, [showSidebar]);

  const userSearch = !matchNotification && !matchUserProfile;

  const userNav =
    loginState === true && !matchNotification && !matchUserProfile;

  console.log(userNav, "userNav");

  const notifLength = notifSeller?.length > 0 && notifBuyer?.length > 0;

  return (
    <nav className={`${Style["nav-header"]}`}>
      <div className="d-flex align-items-center d-xss-none">
        {navbarHome && (
          <>
            <button
              type="button"
              className="button-nav-home"
              onClick={handleSidebarShow}
            >
              <HiMenu className="fs-5" />
            </button>
            <span className="font-20 fw-bolder">{titlePage}</span>
          </>
        )}
      </div>
      <Sidebar show={showSidebar} handleClose={handleSidebarClose} />
      <div className="container p-2 d-none d-xss-block">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-2">
            <Link className="d-flex align-content-center" to="/">
              <img className="w-50" src="/images/loak.id.png" alt="" />
            </Link>
          </div>
          {matchNotification && (
            <>
              <div className="col-8 text-center">
                <span className="fs-6">{titlePage}</span>
              </div>
              <div className="col-2" />
            </>
          )}
          {matchUserProfile && (
            <>
              <div className="col-8 text-center">
                <span className="fs-6">{titlePage}</span>
              </div>
              <div className="col-2" />
            </>
          )}
          <div className="col-4 position-relative">
            {userSearch && (
              <>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="search"
                  className="form-input-search"
                  placeholder="Cari di sini ..."
                  onChange={handleChangeSearch}
                />
                <button
                  onClick={() =>
                    navigate(`/product/search?search=${searchForm}`)
                  }
                  type="button"
                  className="btn position-absolute"
                  style={{
                    top: "-1px",
                    right: "11px",
                  }}
                >
                  <HiSearch className="fs-5" />
                </button>
              </>
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
                    className="position-relative"
                  >
                    <i className="bi bi-bell fs-5" />
                    {notifLength && (
                      <div
                        className="shape-notification position-absolute"
                        style={{
                          top: "8px",
                          right: "12px",
                        }}
                      />
                    )}
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
