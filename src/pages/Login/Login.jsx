import React, { useState } from "react";
import loginimg from "../../assets/image/loginimg.png";
// import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Style from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "",
  });

  return (
    <>
      <div className="container-fluid">
        <div className={`row ${Style["container-login"]}`}>
          <div className={`col-lg-6 col-12 ${Style["login-bg"]}`}>
            {/* <img src={loginimg} alt="loginbanner" className="" /> */}
          </div>
          <div
            className={`col-lg-6 col-12 d-flex justify-content-center align-items-center`}
          >
            <div
              className={`${Style[""]} col-10 col-lg-8 d-flex flex-column my-1`}
            >
              <h1>Masuk</h1>
              <div>
                <p>Email</p>
                <input
                  className="form-input w-100"
                  required
                  style={{ marginButtom: "1rem" }}
                  placeholder="Contoh: johndee@gmail.com"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  className="form-input w-100"
                  required
                  style={{ marginButtom: "1rem" }}
                  placeholder="Masukkan password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({
                      ...loginData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <Button className="button-primary-1 w-100 my-4" href="#">
                Masuk
              </Button>
              <div className="account">
                <p style={{ textAlign: "center " }}>
                  Belum punya akun?{" "}
                  <a href="Daftar">
                    {" "}
                    <span className="fw-bold daftar"> Daftar di sini</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
