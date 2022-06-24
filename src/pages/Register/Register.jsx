import React, { useState } from "react";
import { useEffect } from "react";
// import loginimg from "../../assets/image/loginimg.png";
// import "./Login.css";
// import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Style from "./Register.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../../store/action/registerAction";

function Register() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    console.log(registerData);
    try {
      const res = await axios({
        method: 'POST',
        url: 'https://old-but-new.herokuapp.com/api/v1/auth/register',
        data: registerData,
      });

      if (res.status === 201) {
        localStorage.setItem("role", "buyer", 'token', res.data.access_token);
        navigate("/bproduct", { replace: true });
        console.log(res.data.email);
      }

      if (res.status === 201) {
        localStorage.setItem("role", "seller", 'token', res.data.access_token);
        navigate("/", { replace: true });
        console.log(res.data.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  const { isLoading, data: register } =
    useSelector((state) => state.register);

  useEffect(() => {
    console.log("1. use effect component did mount");
    dispatch(postRegister());
  }, [dispatch]);


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
              <h1 className="fw-bold">Daftar</h1>
              <div>
                <p>Nama</p>
                <input
                  className="form-input w-100"
                  required
                  style={{ marginButtom: "1rem" }}
                  placeholder="Contoh: toni"
                  value={registerData.nama}
                  onChange={(e) =>
                    setRegisterData({
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
                    setRegisterData({
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
                  style={{ marginButtom: "1rem" }}
                  placeholder="Masukkan password"
                  type="password"
                  value={registerData.password}
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      password: e.target.value,
                    })
                  }
                />
              </div>

              <Button
                className="button-primary-1 w-100 my-4"
                href="login"
                onClick={handleSubmit}
              >
                Daftar
              </Button>
              <div className="account">
                <p style={{ textAlign: "center " }}>
                  Sudah punya akun?{" "}
                  <a href="login">
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
