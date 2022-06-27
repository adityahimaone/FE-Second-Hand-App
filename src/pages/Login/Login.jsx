import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import Style from "./Login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../store/action/loginAction";
import { Formik, Form } from "formik";
import * as yup from "yup";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    isLoading,
    data: loginData,
    error,
  } = useSelector((state) => state.login);

  let schema = yup.object().shape({
    
    email: yup.string().email().required("Email harus di isi"),
    password: yup.string().required("Password Harus di isi"),
  });

  const handleSubmit = (values) => {
    dispatch(authLogin(values));
  };

  useEffect(() => {
    if (loginData.data.token !== null) {
      navigate("/");
    }
  }, [error, loginData.data.token]);

  return (
    <>
      <div className="container-fluid">
        <div className={`row ${Style["container-login"]}`}>
          <div className={`col-sm-6 col-12 ${Style["login-bg"]}`}></div>
          <div
            className={`col-sm-6 col-12 d-flex justify-content-center align-items-center`}
          >
            <Formik
              validationSchema={schema}
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log(values);
                handleSubmit(values);
              }}
            >
              {({ handleSubmit, errors, handleChange }) => (
                <Form
                  onSubmit={handleSubmit}
                  className={`col-10 col-sm-7 d-flex flex-column my-1`}
                >
                  <h1 className="fw-bold">Masuk</h1>
                  <div>
                    <p>Email</p>
                    <input
                      className="form-input w-100"
                      style={{ marginButtom: "1rem" }}
                      placeholder="Contoh: johndee@gmail.com"
                      type="email"
                      name="email"
                      onChange={handleChange}
                    />
                    <span className="font-12 text-danger py-1">
                      {errors.email}
                    </span>
                  </div>
                  <div>
                    <p>Password</p>
                    <input
                      className="form-input w-100"
                      style={{ marginButtom: "1rem" }}
                      placeholder="Masukkan password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                    <span className="font-12 text-danger py-1">
                      {errors.password}
                    </span>
                  </div>
                  <span className="font-12 text-danger py-2">
                    {error && "Maaf Email atau Password Salah"}
                  </span>
                  <Button className="button-primary-1 w-100 my-4" type="submit">
                    Masuk
                  </Button>
                  <div className="account">
                    <p style={{ textAlign: "center " }}>
                      Belum punya akun?
                      <Link to="/register">
                        <span className="fw-bold daftar">Daftar di sini</span>
                      </Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
