import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useMatch } from "react-router-dom";
import classnames from "classnames";

function Sidebar({ show, handleClose }) {
  const [loginState, setLoginState] = useState(false);

  const matchHome = useMatch("/");
  const matchProductBuyDetail = useMatch("/product/buy/:id");
  const matchNotification = useMatch("/notification/:id");
  const matchProductList = useMatch("/product/list");
  const matchUserProfile = useMatch("/user/profile");

  const { isLoading: isLoadingLogin, data: loginData } = useSelector(
    (state) => state.login
  );

  useEffect(() => {
    if (loginData.data) {
      if (loginData?.data?.id !== 0 && loginData?.data?.token !== null) {
        setLoginState(true);
      }
    }
  }, [loginData, show]);

  return (
    <Offcanvas show={show} onHide={handleClose} className="w-50">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <Link className="d-flex align-content-center" to="/">
            <img className="w-50" src="/images/loak.id.png" alt="" />
          </Link>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul className="list-group list-group-flush border-0 fw-bold">
          {loginState === false && (
            <li className="list-group-item px-0">
              <Link to="/login">
                <Button className="button-primary-1">
                  <i className="bi bi-box-arrow-in-right" />
                  <span className="px-2">Masuk</span>
                </Button>
              </Link>
            </li>
          )}
          {loginState === true && (
            <>
              <li className="list-group-item border-0 py-0 px-1">
                <Link
                  className={classnames("btn btn-link text-decoration-none", {
                    "text-primary fw-bold": matchNotification,
                    "text-black": !matchNotification,
                  })}
                  to="/notification"
                >
                  Notifikasi
                </Link>
              </li>
              <li className="list-group-item border-0 py-0 px-1">
                <Link
                  className={classnames("btn btn-link text-decoration-none", {
                    "text-primary fw-bold": matchProductList,
                    "text-black": !matchProductList,
                  })}
                  to="/product/list"
                >
                  Daftar Jual
                </Link>
              </li>
              <li className="list-group-item border-0 p-0">
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Akun Saya</Accordion.Header>
                    <Accordion.Body>
                      <Link
                        className={classnames(
                          "btn btn-link text-decoration-none",
                          {
                            "text-primary fw-bold": matchUserProfile,
                            "text-black": !matchUserProfile,
                          }
                        )}
                        to="/user/profile"
                      >
                        Edit Profile
                      </Link>
                      <button
                        className="btn btn-link text-decoration-none text-black"
                        type="button"
                      >
                        Logout
                      </button>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </li>
            </>
          )}
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;
