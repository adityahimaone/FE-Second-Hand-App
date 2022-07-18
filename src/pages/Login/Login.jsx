import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { authLogin } from "../../store/action/loginAction";
import Style from "./Login.module.css";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isLoading,
    data: loginData,
    error,
  } = useSelector((state) => state.login);

  const [showPasword, setShowPasword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPasword((prev) => !prev);
  };

  const schema = yup.object().shape({
    email: yup.string().email().required("Email harus di isi"),
    password: yup.string().required("Password Harus di isi"),
  });

  const handleSubmitForm = (values) => {
    dispatch(authLogin(values));
  };

  useEffect(() => {
    if (loginData.data.token !== null) {
      navigate("/");
    }
  }, [error, loginData.data.token]);

  return (
    <div className="container-fluid">
      <div className={`row ${Style["container-login"]}`}>
        <div className={`col-xss-6 d-none d-xss-block ${Style["login-bg"]}`} />
        <div className="col-xss-6 col-12 d-flex justify-content-center mt-2 mt-xss-0 align-items-start align-items-xss-center position-relative">
          <Formik
            validationSchema={schema}
            initialValues={{
              email: "budi@gmail.com",
              password: "budi@123",
            }}
            onSubmit={(values) => {
              console.log(values);
              handleSubmitForm(values);
            }}
          >
            {({ handleSubmit, errors, handleChange }) => (
              <Form
                onSubmit={handleSubmit}
                className="col-10 col-sm-7 d-flex flex-column my-1"
              >
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className="button-icon bg-white rounded-circle d-block d-xss-none"
                  style={{ top: "10px", left: "5px" }}
                >
                  <i className="bi bi-arrow-left fs-4" />
                </button>
                <h1 className="fw-bold mt-5 mt-xss-0">Masuk</h1>
                <div className="mb-3">
                  <label htmlFor="form-email" className="form-label">
                    Email
                  </label>
                  <input
                    id="form-email"
                    className="form-input w-100"
                    placeholder="Contoh: johndee@gmail.com"
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                  <span className="font-12 text-danger py-1">
                    {errors.email}
                  </span>
                </div>
                <div className=" mb-3 position-relative">
                  <label htmlFor="form-password" className="form-label">
                    Password
                  </label>
                  <input
                    id="form-password"
                    className="form-input w-100"
                    placeholder="Masukkan password"
                    type={showPasword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                  />
                  {showPasword ? (
                    <AiOutlineEyeInvisible
                      className="position-absolute fs-5"
                      style={{ top: "45px", right: "10px" }}
                      onClick={handleClickShowPassword}
                    />
                  ) : (
                    <AiOutlineEye
                      className="position-absolute fs-5"
                      style={{ top: "45px", right: "10px" }}
                      onClick={handleClickShowPassword}
                    />
                  )}
                  <span className="font-12 text-danger py-1">
                    {errors.password}
                  </span>
                </div>
                <span className="font-12 text-danger py-2">
                  {error && "Maaf Email atau Password Salah"}
                </span>
                <button className="button-primary-1 w-100 my-4" type="submit">
                  Masuk
                </button>
                <div className="d-flex text-center d-none d-xss-block">
                  <p className="text-center">
                    Belum punya akun?
                    <Link to="/register">
                      <span className="fw-bold text-decoration-none">
                        &nbsp; Daftar di sini
                      </span>
                    </Link>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="d-flex my-4 justify-content-center align-items-end text-center d-block d-xss-none">
          <span className="text-center">Belum punya akun?</span>
          <Link to="/register">
            <span className="fw-bold text-decoration-none">
              &nbsp; Daftar di sini
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
