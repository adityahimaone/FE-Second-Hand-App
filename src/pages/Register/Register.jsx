import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Style from "./Register.module.css";

function Register() {
 
  const [registerData, setLoginData] = useState({
    nama: "",
    email: "",
    password: "",
    role: "",
  });

  return (
    <>
      <div className="container-fluid">
        <div className={`row ${Style["container-register"]}`}>
          <div className={`col-lg-6 col-12 ${Style["register-bg"]}`}>
            {/* <img src={loginimg} alt="loginbanner" className="" /> */}
          </div>
          <div
            className={`col-lg-6 col-12 d-flex justify-content-center align-items-center`}
          >
            <div
              className={`${Style[""]} col-10 col-lg-8 d-flex flex-column my-1`}
            >
              <h1>Daftar</h1>
              <div>
                <p>Nama</p>
                <input
                  className="form-input w-100"
                  required
                  style={{ marginButtom: "1rem" }}
                  placeholder="Contoh: Toni"
                  value={registerData.nama}
                  onChange={(e) =>
                    setLoginData({
                      ...registerData,
                      nama: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <p>Email</p>
                <input
                  className="form-input w-100"
                  required
                  style={{ marginButtom: "1rem" }}
                  placeholder="Contoh: johndee@gmail.com"
                  value={registerData.email}
                  onChange={(e) =>
                    setLoginData({
                      ...registerData,
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
                  value={registerData.password}
                  onChange={(e) =>
                    setLoginData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <Button className="button-primary-1 w-100 my-4" href="Login">
                Daftar
              </Button>
              <div className="account">
                <p style={{ textAlign: "center " }}>
                  Sudah punya akun?{" "}
                  <a href="Login">
                    {" "}
                    <span className="fw-bold daftar"> Masuk di sini</span>
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

export default Register;
