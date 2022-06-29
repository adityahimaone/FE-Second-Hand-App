import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "src/store/action/loginAction";
import { Dropdown } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState(false);
  const { isLoading, data: loginData } = useSelector((state) => state.login);

  const handleLogout = () => {
    dispatch(authLogout());
    setLoginState(false);
  };

  useEffect(() => {
    if (loginData.data) {
      if (loginData?.data?.id !== 0 && loginData?.data?.token !== null) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setLoginState(true);
      }
    }
  }, [loginData]);

  console.log(loginState, loginData);

  return (
    <nav className="shadow">
      <div className="container p-2">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-2">
            <button
              className="btn d-flex align-content-center"
              onClick={() => navigate("/")}
            >
              <span className="fs-5 w-100">Old But New</span>
            </button>
          </div>
          <div className="col-4">
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="search"
              className="form-input-search"
              placeholder="Cari di sini ..."
            />
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
            {loginState === true && (
              <div className="d-flex">
                <Link to="/product/list" className="btn">
                  <i className="bi bi-list-ul fs-5"></i>
                </Link>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" variant="none">
                    <i className="bi bi-bell fs-5"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" variant="none">
                    <i className="bi bi-person fs-5"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
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
